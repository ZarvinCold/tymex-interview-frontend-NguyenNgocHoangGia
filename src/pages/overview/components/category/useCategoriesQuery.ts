import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "services/filter";
import { useStore } from "store/useStore";

export const useCategoriesQuery = () => {
  const searchOptions = useStore((state) => state.searchOptions);
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => fetchCategories(searchOptions),
    select: (res) => res.categories,
  });
};
