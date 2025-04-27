import { fetchData } from "services/restClient";
import { IProduct } from "types";

const BASE_URL = import.meta.env.VITE_API_URL + "/api";

export const fetchProducts = async () => {
  return await fetchData<IProduct[]>(`${BASE_URL}/products`);
};
