import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProducts, ProductResponse } from "services/product";
import { useStore } from "store/useStore";

export const useProductsQuery = () => {
  const searchOptions = useStore((state) => state.searchOptions);
  const category = useStore((state) => state.searchOptions.category);
  return useInfiniteQuery<ProductResponse>({
    queryKey: ["products", category],
    queryFn: () => fetchProducts({ searchOptions }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.page === lastPage.totalPages) return undefined;
      return allPages.length + 1;
    },
    staleTime: Infinity,
  });
};
