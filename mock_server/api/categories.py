from fastapi import APIRouter
from api.product_utils import get_all_products

router = APIRouter()

@router.get("/api/categories")
def get_categories():
    products = get_all_products()
    categories = sorted(set(p["category"] for p in products if "category" in p))
    return {"categories": categories}