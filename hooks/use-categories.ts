import { categories } from "../data/seed-categories";
import type { Category } from "@/lib/types";

export function useCategories() {
  // Return the full catalog
  const getAll = (): Category[] => categories;

  // Look up one category by its ID
  const getCategoryById = (id: string): Category | undefined => {
    return categories.find((cat) => cat.id === id);
  };

  // Return the first one as a sensible default
  const getDefaultCategory = (): Category => {
    return categories[0];
  };

  return {
    categories: getAll(),
    getCategoryById,
    getDefaultCategory,
  };
}