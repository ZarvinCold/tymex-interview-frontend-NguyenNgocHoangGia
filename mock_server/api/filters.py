from fastapi import APIRouter, Body
from fastapi.responses import JSONResponse
from .product_utils import get_all_products, filter_products
from ..data.models import IProductSearchParams

router = APIRouter()

@router.get("/api/themes")
def get_themes():
    products = get_all_products()
    themes = sorted(set(p["theme"] for p in products if "theme" in p))
    return {"themes": themes}

@router.get("/api/tiers")
def get_tiers():
    products = get_all_products()
    tiers = sorted(set(p["tier"] for p in products if "tier" in p))
    return {"tiers": tiers}

@router.post("/api/categories")
def get_categories(searchOptions: IProductSearchParams = Body(default_factory=IProductSearchParams)):
    products = get_all_products()
    filtered = filter_products(products, searchOptions, allow_sort=False, allow_pagination=False)
    categories = sorted(set(p["category"] for p in filtered if "category" in p))
    return JSONResponse({"categories": categories})