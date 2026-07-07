"use client";

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';

// Hook
import { useExpenses } from "@/hooks/ExpensesContext";

// Components
import Card from '@/components/ui/Card';
import TotalSpent from '@/components/features/dashboard/TotalSpent';
import PeriodSelector from '@/components/features/dashboard/PeriodSelector';
import CategoryBreakdown from '@/components/features/dashboard/CategoryBreakdown';
import RecentTransactions from '@/components/features/dashboard/RecentTransactions';

export default function HomePage() {
  const router = useRouter();
  const [period, setPeriod] = useState('month');

  // 🔴 BEFORE: const mockExpenses = [...]
  // ✅ AFTER: Use the real hook
  const { expenses, getTotalForPeriod, getBreakdownByCategory, getRecentTransactions } = useExpenses();

  // Period label for TotalSpent
  const periodLabels = {
    month: 'this month',
    lastMonth: 'last month',
    week: 'this week',
    all: 'all time',
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col gap-6">
      <div className="flex justify-center">
        <PeriodSelector
          selected={period}
          onSelect={setPeriod}
          options={['month', 'lastMonth', 'week', 'all']}
        />
      </div>

      <Card width="100%" className="py-10">
        <TotalSpent
          total={getTotalForPeriod(period)}
          periodLabel={periodLabels[period]}
        />
      </Card>

      <Card width="100%">
        <h2 className="text-lg font-bold text-gray-900 mb-5">
          By Category
        </h2>
        <CategoryBreakdown
          breakdown={getBreakdownByCategory(period)}
          onCategoryClick={(categoryId) =>
            console.log('Filter by category:', categoryId)
          }
        />
      </Card>

      <Card width="100%">
        <RecentTransactions
          transactions={getRecentTransactions(5)}
          onViewAll={() => router.push('/transactions')}
        />
      </Card>
    </div>
  );
}