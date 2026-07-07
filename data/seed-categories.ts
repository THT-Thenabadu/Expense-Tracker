import type { Category } from "@/lib/types";

export const categories: Category[] = [
  {
    id: "food",
    name: "Food & Drinks",
    color: "#ef4444",
    icon: "🍔",
    isDefault: true,
  },
  {
    id: "transport",
    name: "Transport",
    color: "#22c55e",
    icon: "🚗",
    isDefault: true,
  },
  {
    id: "bills",
    name: "Bills",
    color: "#3b82f6",
    icon: "📄",
    isDefault: true,
  },
  {
    id: "entertainment",
    name: "Entertainment",
    color: "#a855f7",
    icon: "🎬",
    isDefault: true,
  },
  {
    id: "shopping",
    name: "Shopping",
    color: "#f97316",
    icon: "🛍️",
    isDefault: true,
  },
  {
    id: "other",
    name: "Other",
    color: "#6b7280",
    icon: "📦",
    isDefault: true,
  },
];