import { create } from "zustand";

const useSearchStore = create((set) => ({
  searchText: "", // Valeur initiale du texte de recherche
  setSearchText: (text) => set({ searchText: text }), // Mettre à jour la valeur de recherche
}));

export default useSearchStore;
