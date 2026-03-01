import { RV, RVFilterParams } from "@/types/RV";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface RVStoreState {
  rv: RV[];
  total: number;
  limit: number;
  filters: RVFilterParams;
  favorites: RV[];
  setRVs: (rv: RV[], total: number) => void;
  addRVs: (rv: RV[]) => void;
  setFilters: (filters: RVFilterParams) => void;
  resetFilters: () => void;
  addToFavorites: (rv: RV) => void;
  removeFromFavorites: (id: string) => void;
  isFavorite: (id: string) => boolean;
}

export const useRVDraftStore = create<RVStoreState>()(
  persist(
    (set, get) => ({
      rv: [],
      total: 0,
      limit: 4,
      filters: {},
      favorites: [],
      setRVs: (rv, total) => set({ rv, total }),
      addRVs: (rv) => set((state) => ({ rv: [...state.rv, ...rv] })),
      setFilters: (filters) =>
        set({
          filters,
          total: 0,
        }),
      resetFilters: () => set({ filters: {}, rv: [], total: 0 }),
      addToFavorites: (rv) =>
        set((state) => ({ favorites: [...state.favorites, rv] })),
      removeFromFavorites: (id) =>
        set((state) => ({
          favorites: state.favorites.filter((rv) => rv.id !== id),
        })),
      isFavorite: (id) => get().favorites.some((rv) => rv.id === id),
    }),
    {
      name: "rv-draft-storage",
      partialize: (state) => ({
        favorites: state.favorites,
      }),
    },
  ),
);
