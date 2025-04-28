import { create } from "zustand";

export interface SearchFilterState {
  search: string;
  price: number[];
  tier: string[];
  theme: string;
  time: string;
  priceSort: string;
}

interface SearchFilterStore extends SearchFilterState {
  setSearch: (v: string) => void;
  setPrice: (v: number[]) => void;
  setTier: (v: string[]) => void;
  setTheme: (v: string) => void;
  setTime: (v: string) => void;
  setPriceSort: (v: string) => void;
  setOptions: (v: Partial<SearchFilterState>) => void;
  reset: () => void;
}

const defaultState: SearchFilterState = {
  search: "",
  price: [0, 100],
  tier: [],
  theme: "",
  time: "",
  priceSort: "",
};

export const useSearchFilterStore = create<SearchFilterStore>((set) => ({
  ...defaultState,
  setSearch: (search) => set({ search }),
  setPrice: (price) => set({ price }),
  setTier: (tier) => set({ tier }),
  setTheme: (theme) => set({ theme }),
  setTime: (time) => set({ time }),
  setPriceSort: (priceSort) => set({ priceSort }),
  setOptions: (options) => set({ ...options }),
  reset: () => set({ ...defaultState }),
}));