import React from 'react';
import ExpenseItem from '../expense-list/ExpenseItem';

const RecentTransactions = ({
  transactions,
  onViewAll,
  className = '',
}) => {
  if (!transactions || transactions.length === 0) {
    return null;
  }

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-bold text-gray-900">
          Recent Transactions
        </h2>
        <button
          type="button"
          onClick={onViewAll}
          className="
            text-sm
            font-semibold
            text-blue-600
            hover:text-blue-700
            hover:bg-blue-50
            px-3
            py-1.5
            rounded-lg
            transition-all
            duration-200
          "
        >
          View All
        </button>
      </div>

      {/* List */}
      <div className="flex flex-col gap-2">
        {transactions.map((transaction) => (
          <ExpenseItem
            key={transaction.id}
            transaction={transaction}
            onEdit={() => {}} // Dashboard preview — no edit here
            onDelete={() => {}} // Dashboard preview — no delete here
          />
        ))}
      </div>
    </div>
  );
};

export default RecentTransactions;