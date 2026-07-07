export const APP_NAME = "Expense Tracker";

export const STORAGE_KEYS = {
  EXPENSES: "expense-tracker-expenses",
  CATEGORIES: "expense-tracker-categories",
} as const;

export const DEFAULT_PERIOD = "month";

export const DEFAULT_CATEGORIES = [
  "food",
  "transport",
  "bills",
  "entertainment",
  "shopping",
  "other",
];