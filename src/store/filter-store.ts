import { create, type StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";


interface IFilterInitialState {
  searchTerm: string;
  category: string;

  selectedBrand: string;
  minPrice: number;
  maxPrice: number;
  minRating: number;
  showInStockOnly: boolean;
}

interface IFilterActions {
  setSearchTerm: (value: string) => void;
  setCategory: (value: string) => void;
  setSelectedBrand: (value: string) => void;
  setMinPrice: (value: number) => void;
  setMaxPrice: (value: number) => void;
  setMinRating: (value: number) => void;
  setShowInStockOnly: (value: boolean) => void;

  resetFilters: () => void;
}

interface IFilterState extends IFilterInitialState, IFilterActions {}

const initialFilterState: IFilterInitialState = {
  searchTerm: "",
  category: "All",
  selectedBrand: "All",
  minPrice: 0,
  maxPrice: 1000,
  minRating: 0,
  showInStockOnly: false,
};

const filterStore: StateCreator<IFilterState> = (set) => ({
  ...initialFilterState,
  setSearchTerm: (value) => set({ searchTerm: value }),
  setCategory: (value) => set({ category: value }),
  setSelectedBrand: (value) => set({ selectedBrand: value }),
  setMinPrice: (value) => set({ minPrice: value }),
  setMaxPrice: (value) => set({ maxPrice: value }),
  setMinRating: (value) => set({ minRating: value }),
  setShowInStockOnly: (value) => set({ showInStockOnly: value }),
  resetFilters: () => set({ ...initialFilterState }),
});

export const useFilterStore = create<IFilterState>()(
  devtools(
    persist(filterStore, {
      name: "filter-storage",
      storage: createJSONStorage(() => localStorage),
    })
  )
);

export const useSearchTerm = () => useFilterStore((state) => state.searchTerm);
export const useSetSearchTerm = () =>
  useFilterStore((state) => state.setSearchTerm);
export const useCategory = () => useFilterStore((state) => state.category);
export const useSetCategory = () =>
  useFilterStore((state) => state.setCategory);
export const useSelectedBrand = () => useFilterStore((state) => state.selectedBrand);
export const useSetSelectedBrand = () =>
  useFilterStore((state) => state.setSelectedBrand);
export const useMinPrice = () => useFilterStore((state) => state.minPrice);
export const useSetMinPrice = () =>
  useFilterStore((state) => state.setMinPrice);
export const useMaxPrice = () => useFilterStore((state) => state.maxPrice);
export const useSetMaxPrice = () =>
  useFilterStore((state) => state.setMaxPrice);
export const useMinRating = () => useFilterStore((state) => state.minRating);
export const useSetMinRating = () =>
  useFilterStore((state) => state.setMinRating);
export const useShowInStockOnly = () =>
  useFilterStore((state) => state.showInStockOnly);
export const useSetInStockOnly = () =>
  useFilterStore((state) => state.setShowInStockOnly);
export const useResetFilters = () =>
  useFilterStore((state) => state.resetFilters);
