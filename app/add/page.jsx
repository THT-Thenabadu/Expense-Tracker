"use client";

import { useRouter } from 'next/navigation';
import PageHeader from '@/components/shared/PageHeader';
import Card from '@/components/ui/Card'
import ExpenseForm from '@/components/features/expense-form/ExpenseForm';

export default function AddPage() {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto px-4 py-6">
      {/* Title + back arrow. Escape hatch if user changes their mind. */}
      <PageHeader
        title="Add Expense"
        showBack
        onBack={() => router.back()}
      />

      {/* The form — centered, grouped visually, no distractions. */}
      <Card width="100%" className="mt-6">
        <ExpenseForm
          onSave={(transaction) => {
            // Optional: show a toast here if you want
            console.log('Saved:', transaction);
          }}
        />
      </Card>
    </div>
  );
}