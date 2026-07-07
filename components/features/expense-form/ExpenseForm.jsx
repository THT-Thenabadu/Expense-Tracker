"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useExpenses } from '@/hooks/ExpensesContext';  // ← ADD THIS
import AmountInput from './AmountInput';
import CategoryPicker from './CategoryPicker';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';

const ExpenseForm = ({
  onSave,
  className = '',
}) => {
  const router = useRouter();
  const { addExpense } = useExpenses();  // ← ADD THIS

  const [amount, setAmount] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [note, setNote] = useState('');
  const [errors, setErrors] = useState({});

  const categories = [
    { name: 'Food & Drinks', color: '#ef4444', icon: '🍔' },
    { name: 'Transport', color: '#22c55e', icon: '🚗' },
    { name: 'Bills', color: '#3b82f6', icon: '📄' },
  ];

  const validate = () => {
    const newErrors = {};

    if (!amount || parseFloat(amount) <= 0) {
      newErrors.amount = 'Amount must be greater than 0';
    }
    if (!selectedCategory) {
      newErrors.category = 'Please select a category';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    const transaction = {
      id: Date.now(),
      amount: Math.round(parseFloat(amount) * 100),  // ← Convert to cents
      category: selectedCategory,
      note: note.trim(),
      date: new Date().toISOString(),
    };

    addExpense(transaction);  // ← UNCOMMENT THIS
    onSave?.(transaction);

    router.push('/');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-6 ${className}`}
    >
      <AmountInput
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        error={errors.amount}
      />

      <CategoryPicker
        selectedCategory={selectedCategory}
        onSelect={setSelectedCategory}
        categories={categories}
        error={errors.category}
      />

      <Input
        label="Note"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Coffee shop..."
      />

      <Button
        type="submit"
        height="48px"
        width="100%"
      >
        Save
      </Button>
    </form>
  );
};

export default ExpenseForm;