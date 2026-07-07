export interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
  isDefault: boolean;
}

export interface Transaction {
  id: string | number;
  amount: number; // in cents
  categoryId: string;
  category: {
    name: string;
    color: string;
    icon?: string;
  };
  note: string;
  date: string; // ISO 8601
  createdAt?: string;
}

export type Period = "week" | "month" | "lastMonth" | "all";