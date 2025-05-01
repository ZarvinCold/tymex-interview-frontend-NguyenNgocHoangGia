export interface IProduct {
  id: number;
  title: string;
  category:
    | "Upper Body"
    | "Lower Body"
    | "Hat"
    | "Shoes"
    | "Accessory"
    | "Legendary"
    | "Mythic"
    | "Epic"
    | "Rare";
  price: number;
  isFavorite: boolean;
  createdAt: number;
  theme: "Dark" | "Light" | "Colorful" | "Halloween";
  tier: "Basic" | "Premium" | "Deluxe";
  imageId: number; // 1 -> 20 (integer)
  author: IAuthor;
}

export interface IAuthor {
  firstName: string;
  lastName: string;
  email: string;
  gender: string;
  avatar: string;
  onlineStatus: string;
}

export interface Pageable<T> {
  readonly products: T[];
  /**
   * current page number
   */
  readonly page: number;

  /**
   * items per page.
   */
  readonly size: number;
  readonly totalItems: number;
  readonly totalPages: number;
}
