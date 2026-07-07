import { STORAGE_KEYS } from "@/data/constants";

export function getExpenses() {
  try {
    if (typeof window === "undefined") return [];
    const raw = localStorage.getItem(STORAGE_KEYS.EXPENSES);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveExpenses(data: unknown[]) {
  try {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEYS.EXPENSES, JSON.stringify(data));
  } catch (err) {
    console.error("Failed to save expenses:", err);
  }
}

export function getCategories() {
  try {
    if (typeof window === "undefined") return null;
    const raw = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function saveCategories(data: unknown[]) {
  try {
    if (typeof window === "undefined") return;
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(data));
  } catch (err) {
    console.error("Failed to save categories:", err);
  }
}