"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useExpenses } from "@/hooks/ExpensesContext";

import PageHeader from '@/components/shared/PageHeader';
import Card from '@/components/ui/Card';
import PeriodSelector from '@/components/features/dashboard/PeriodSelector';
import ExpenseList from '@/components/features/expense-list/ExpenseList';

export default function TransactionsPage() {
  const router = useRouter();
  const [period, setPeriod] = useState('all');

  // ✅ Use the real hook
  const { expenses, deleteExpense } = useExpenses();

  const handleDelete = (id) => {
    deleteExpense(id);
  };

  const handleEdit = (transaction) => {
    console.log('Edit:', transaction);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col gap-6">
      <PageHeader
        title="Transactions"
        showBack
        onBack={() => router.back()}
      />

      <div className="flex justify-start">
        <PeriodSelector
          selected={period}
          onSelect={setPeriod}
          options={['all', 'month', 'lastMonth', 'week']}
        />
      </div>

      <Card width="100%">
        <ExpenseList
          expenses={expenses}  // ✅ real data from hook
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      </Card>
    </div>
  );
}