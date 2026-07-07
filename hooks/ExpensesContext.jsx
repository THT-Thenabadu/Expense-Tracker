"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { getExpenses, saveExpenses } from "@/lib/storage";

const ExpensesContext = createContext(null);

export function ExpensesProvider({ children }) {
  const [expenses, setExpenses] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load once on mount
  useEffect(() => {
    const stored = getExpenses();
    setExpenses(stored ?? []);
    setIsLoaded(true);
  }, []);

  // Auto-save when expenses change
  useEffect(() => {
    if (!isLoaded) return;
    saveExpenses(expenses);
  }, [expenses, isLoaded]);

  const addExpense = useCallback((transaction) => {
    const newTransaction = {
      ...transaction,
      id: transaction.id ?? Date.now(),
      date: transaction.date || new Date().toISOString(),
    };

     console.log("ADDING TO CONTEXT:", newTransaction);

    setExpenses((prev) => [...prev, newTransaction]);
  }, []);

  const deleteExpense = useCallback((id) => {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const updateExpense = useCallback((id, updates) => {
    setExpenses((prev) =>
      prev.map((e) => (e.id === id ? { ...e, ...updates } : e))
    );
  }, []);

  const getTotalForPeriod = useCallback((period) => {
    // ... same logic as before
    return expenses.reduce((sum, e) => sum + e.amount, 0);
  }, [expenses]);

  const getBreakdownByCategory = useCallback((period) => {
    // ... same logic as before
    return [];
  }, [expenses]);

  const getRecentTransactions = useCallback((count) => {
    return [...expenses]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, count);
  }, [expenses]);

  return (
    <ExpensesContext.Provider
      value={{
        expenses,
        isLoaded,
        addExpense,
        deleteExpense,
        updateExpense,
        getTotalForPeriod,
        getBreakdownByCategory,
        getRecentTransactions,
      }}
    >
      {children}
    </ExpensesContext.Provider>
  );
}

export function useExpenses() {
  const context = useContext(ExpensesContext);
  if (!context) {
    throw new Error("useExpenses must be used inside ExpensesProvider");
  }
  return context;
}