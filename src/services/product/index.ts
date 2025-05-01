import { fetchData, postData } from "services/restClient";
import { SearchFilterState } from "store/useStore";
import { IProduct, Pageable } from "types";

type ProductRequestParams = {
  searchOptions: SearchFilterState;
  pageParam?: number;
  limit?: number;
};

export type ProductResponse = Pageable<IProduct>;

export const fetchProducts = async ({
  searchOptions,
  pageParam = 1,
  limit = 12,
}: ProductRequestParams) => {
  const res = await postData<SearchFilterState, ProductResponse>(
    `/products?_page=${pageParam}&_limit=${limit}`,
    searchOptions,
  );
  return res;
};

export const fetchCollections = async ({
  pageParam = 1,
  limit = 12,
}: Partial<ProductRequestParams>) => {
  return await fetchData<ProductResponse>(
    `/collections?_page=${pageParam}&_limit=${limit}`,
  );
};
