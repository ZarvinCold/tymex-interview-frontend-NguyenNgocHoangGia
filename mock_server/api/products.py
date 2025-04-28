from fastapi import APIRouter, HTTPException, Query
from typing import Optional
from ..file_ops import read_data, write_data
from ..data.models import IProduct
import os
from .product_utils import get_all_products

router = APIRouter()
file_path = os.path.join(os.path.dirname(__file__), '..', 'data', 'db.json')

@router.get("/api/products")
def list_products(
    q: Optional[str] = Query(None),
    title_like: Optional[str] = Query(None),
    _sort: Optional[str] = Query(None),
    _order: Optional[str] = Query(None),
    _page: Optional[int] = Query(1),
    _limit: Optional[int] = Query(12)
):
    products = get_all_products()
    # Full-text search
    if q:
        q_lower = q.lower()
        def match_any_field(product):
            def flatten(obj):
                if isinstance(obj, dict):
                    return ' '.join([flatten(v) for v in obj.values()])
                return str(obj)
            return q_lower in flatten(product).lower()
        products = [p for p in products if match_any_field(p)]
    # Field-specific partial match
    if title_like:
        products = [p for p in products if title_like.lower() in p['title'].lower()]
    # Sorting
    if _sort:
        reverse = _order == 'desc'
        products = sorted(products, key=lambda x: x.get(_sort, None), reverse=reverse)
    # Pagination
    start = (_page - 1) * _limit
    end = start + _limit
    paginated = products[start:end]
    total = len(products)
    has_next_page = end < total
    return {
        "products": paginated,
        "total": total,
        "page": _page,
        "limit": _limit,
        "hasNextPage": has_next_page
    }

@router.get("/products/{product_id}")
def get_product(product_id: int):
    products = get_all_products()
    for product in products:
        if product['id'] == product_id:
            return product
    raise HTTPException(status_code=404, detail="Product not found")

@router.post("/products")
def create_product(product: IProduct):
    data = read_data('./data/db.json')
    products = data['products']
    new_id = max([p['id'] for p in products], default=0) + 1
    product_dict = product.dict()
    product_dict['id'] = new_id
    products.append(product_dict)
    write_data('../data/db.json', data)
    return product_dict

@router.put("/products/{product_id}")
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

@router.delete("/products/{product_id}")
def delete_product(product_id: int):
    data = read_data('./data/db.json')
    products = data['products']
    for idx, p in enumerate(products):
        if p['id'] == product_id:
            deleted = products.pop(idx)
            write_data('./data/db.json', data)
            return deleted
    raise HTTPException(status_code=404, detail="Product not found")
