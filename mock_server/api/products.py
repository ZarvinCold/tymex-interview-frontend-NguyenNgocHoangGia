from fastapi import APIRouter, HTTPException, Query, Body
from typing import Optional
from file_ops import read_data, write_data
from data.models import IProduct, IProductSearchParams
import os
from api.product_utils import get_all_products

router = APIRouter()
file_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'db.json')

@router.get("/products/{product_id}")
def get_product(product_id: int):
    products = get_all_products()
    for product in products:
        if product['id'] == product_id:
            return product
    raise HTTPException(status_code=404, detail="Product not found")

# @router.post("/api/products")
# def create_product(product: IProduct):
#     data = read_data('./data/db.json')
#     products = data['products']
#     new_id = max([p['id'] for p in products], default=0) + 1
#     product_dict = product.dict()
#     product_dict['id'] = new_id
#     products.append(product_dict)
#     write_data('../data/db.json', data)
#     return product_dict

@router.put("/api/products/{product_id}")
def update_product(product_id: int, product: IProduct):
    data = read_data('./data/db.json')
    products = data['products']
    for idx, p in enumerate(products):
        if p['id'] == product_id:
            product_dict = product.dict()
            product_dict['id'] = product_id
            products[idx] = product_dict
            write_data('./data/db.json', data)
            return product_dict
    raise HTTPException(status_code=404, detail="Product not found")

@router.delete("/api/products/{product_id}")
def delete_product(product_id: int):
    data = read_data('./data/db.json')
    products = data['products']
    for idx, p in enumerate(products):
        if p['id'] == product_id:
            deleted = products.pop(idx)
            write_data('./data/db.json', data)
            return deleted
    raise HTTPException(status_code=404, detail="Product not found")

@router.get("/api/collections")
def get_collections(
    _page: int = Query(1),
    _limit: int = Query(12)
):
    products = get_all_products()
    favorited = [p for p in products if p.get("isFavorite", True)]
    start = (_page - 1) * _limit
    end = start + _limit
    paginated = favorited[start:end]
    total = len(favorited)
    has_next_page = end < total
    return {
        "products": paginated,
        "total": total,
        "page": _page,
        "limit": _limit,
        "hasNextPage": has_next_page
    }

@router.post("/api/products")
def search_products(
    _page: int = Query(1),
    _limit: int = Query(12),
    searchOptions: IProductSearchParams = Body(default_factory=IProductSearchParams)
):
    products = get_all_products()
    # Extract filter fields from searchOptions model
    search = searchOptions.search
    price = searchOptions.price
    tier = searchOptions.tier
    theme = searchOptions.theme
    time = searchOptions.time
    priceSort = searchOptions.priceSort
    category = searchOptions.category

    print(searchOptions)
    # Full-text search
    if search:
        q_lower = search.lower()
        def match_any_field(product):
            def flatten(obj):
                if isinstance(obj, dict):
                    return ' '.join([flatten(v) for v in obj.values()])
                return str(obj)
            return q_lower in flatten(product).lower()
        products = [p for p in products if match_any_field(p)]
    # Price filter
    if price and isinstance(price, list) and len(price) == 2:
        products = [p for p in products if price[0] <= p.get("price", 0) <= price[1]]
    # Tier filter
    if tier:
        products = [p for p in products if p.get("tier", "") == tier]
    # Theme filter
    if theme:
        products = [p for p in products if theme.lower() in p.get("theme", "").lower()]
    # Time filter
    if time:
        products = [p for p in products if time.lower() in p.get("time", "").lower()]
    # Sorting
    if priceSort:
        reverse = priceSort == 'desc'
        products = sorted(products, key=lambda x: x.get("price", None), reverse=reverse)
    # Category filter
    if category:
        products = [p for p in products if p.get("category", "") in category]
    # Pagination
    start = (_page - 1) * _limit
    end = start + _limit
    paginated = products[start:end]
    total = len(products)
    has_next_page = end < total
    total_pages = (total + _limit - 1) // _limit
    return {
        "products": paginated,
        "page": _page,
        "size": _limit,
        "totalItems": len(paginated),
        "totalPages": total_pages
    }
