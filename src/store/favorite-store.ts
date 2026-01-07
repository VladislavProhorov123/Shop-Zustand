import { create } from "zustand";
import type { StateCreator } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

interface IFavoriteItem {
  id: number;
}

interface IFavoriteInitialState {
  favorites: IFavoriteItem[];
}

interface IFavoriteActions {
  addFavorite: (item: IFavoriteItem) => void;
  removeFromFavorite: (id: number) => void;
  toggleFavorite: (item: IFavoriteItem) => void;
}

interface IFavoriteState extends IFavoriteInitialState, IFavoriteActions {}

const initialState: IFavoriteInitialState = {
  favorites: [],
};

const favoritesStore: StateCreator<IFavoriteState> = (set) => ({
  ...initialState,
  addFavorite: (item: IFavoriteItem) =>
    set((state) => ({
      favorites: state.favorites.some((fav) => fav.id === item.id)
        ? state.favorites
        : [...state.favorites, item],
    })),
  removeFromFavorite: (id: number) =>
    set((state) => ({
      favorites: state.favorites.filter((item) => item.id !== id),
    })),
  toggleFavorite: (item: IFavoriteItem) =>
    set((state) => ({
      favorites: state.favorites.some((fav) => fav.id === item.id)
        ? state.favorites.filter((fav) => fav.id !== item.id)
        : [...state.favorites, item],
    })),
});

const useFavoriteStore = create<IFavoriteState>()(
  devtools(
    persist(favoritesStore, {
      name: "favorites-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ favorites: state.favorites }),
    })
  )
);

export const useFavorites = () => useFavoriteStore((state) => state.favorites);
export const useAddFavorite = () =>
  useFavoriteStore((state) => state.addFavorite);
export const useRemoteFavorite = () =>
  useFavoriteStore((state) => state.removeFromFavorite);
export const useToggleFavorite = () =>
  useFavoriteStore((state) => state.toggleFavorite);
