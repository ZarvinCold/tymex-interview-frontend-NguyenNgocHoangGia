import { fetchData } from "services/restClient";
import { IProduct, Pageable } from "types";


type ProductRequestParams = {
  pageParam?: number;
  limit?: number;
}

type ProductResponse = Pageable<IProduct>

export const fetchProducts = async ({ pageParam = 1, limit = 12 }: ProductRequestParams) => {
  const res = await fetchData<ProductResponse>(`/products?_page=${pageParam}&_limit=${limit}`);
  return res;
};
