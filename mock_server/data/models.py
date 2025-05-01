from pydantic import BaseModel
from typing import Literal

class IAuthor(BaseModel):
    firstName: str
    lastName: str
    email: str
    gender: str
    avatar: str
    onlineStatus: str

class IProduct(BaseModel):
    id: int
    title: str
    category: Literal[
        "Upper Body", "Lower Body", "Hat", "Shoes", "Accessory", "Legendary", "Mythic", "Epic", "Rare"
    ]
    price: float
    isFavorite: bool
    createdAt: int
    theme: Literal["Dark", "Light", "Colorful", "Halloween"]
    tier: Literal["Basic", "Premium", "Deluxe"]
    imageId: int
    author: IAuthor

class IProductSearchParams(BaseModel):
    search: str = ""
    price: list[float] = [0, 100]
    tier: str = ""
    theme: str = ""
    time: str = ""
    priceSort: str = ""
    category: str = ""