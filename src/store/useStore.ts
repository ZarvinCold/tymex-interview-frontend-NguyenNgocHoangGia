import { create } from "zustand";

export interface SearchFilterState {
  search: string;
  price: number[];
  tier: string;
  theme: string;
  time: string;
  priceSort: string;
  category: string;
}

interface SearchFilterStore {
  searchOptions: SearchFilterState;
  setOptions: (v: Partial<SearchFilterState>) => void;
  reset: () => void;
}

const DEFAULT_SEARCH_OPTIONS: SearchFilterState = {
  search: "",
  price: [0, 100],
  tier: "",
  theme: "",
  time: "",
  priceSort: "",
  category: "",
};

const defaultState = {
  searchOptions: DEFAULT_SEARCH_OPTIONS,
};

export const useStore = create<SearchFilterStore>((set) => ({
  searchOptions: DEFAULT_SEARCH_OPTIONS,
  setOptions: (options) =>
    set((state) => ({ searchOptions: { ...state.searchOptions, ...options } })),
  reset: () => set({ ...defaultState }),
}));
