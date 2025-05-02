import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchProducts, ProductResponse } from "services/product";
import { useStore } from "store/useStore";

export const useProductsQuery = () => {
  const searchOptions = useStore((state) => state.searchOptions);
  const category = useStore((state) => state.searchOptions.category);
  return useInfiniteQuery<ProductResponse>({
    queryKey: ["products", category],
    queryFn: ({ pageParam }) =>
      fetchProducts({ searchOptions, pageParam: pageParam as number }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.page + 1;
      const hasMore = lastPage.page < lastPage.totalPages;
      return hasMore ? nextPage : undefined;
    },
    staleTime: Infinity,
  });
};
