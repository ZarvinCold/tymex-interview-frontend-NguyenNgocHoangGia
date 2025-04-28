from fastapi import APIRouter
from .product_utils import get_all_products

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