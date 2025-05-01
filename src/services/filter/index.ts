import { fetchData, postData } from "services/restClient";
import { SearchFilterState } from "store/useStore";

type TierResponse = {
  tiers: string[];
};

type ThemeResponse = {
  themes: string[];
};

export type CategoryResponse = {
  categories: string[];
};

export const fetchTiers = async () => {
  return await fetchData<TierResponse>(`/tiers`);
};

export const fetchThemes = async () => {
  return await fetchData<ThemeResponse>(`/themes`);
};

export const fetchCategories = async (searchOptions: SearchFilterState) => {
  return await postData<SearchFilterState, CategoryResponse>(
    "/categories",
    searchOptions,
  );
};
