import { create } from "zustand";

interface StoreType {
  genres: string;
  setGenres: (genres: string) => void;
  platforms: string;
  setPlatforms: (platforms: string) => void;
  ordering: string;
  setOrdering: (ordering: string) => void;
  search: string;
  setSearch: (search: string) => void;
  resetFilters: () => void;
}

const useStore = create<StoreType>((set) => ({
  genres: "",
  setGenres: (genres) => set({ genres }),
  platforms: "",
  setPlatforms: (platforms) => set({ platforms }),
  ordering: "",
  setOrdering: (ordering) => set({ ordering }),
  search: "",
  setSearch: (search) => set({ search }),
  resetFilters: () =>
    set({
      genres: "",
      platforms: "",
      ordering: "",
      search: "",
    }),
}));

export default useStore;
