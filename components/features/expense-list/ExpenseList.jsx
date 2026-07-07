import React from 'react';
import EmptyState from './EmptyState';
import ExpenseItem from './ExpenseItem';

const ExpenseList = ({
  expenses,
  onDelete,
  onEdit,
  className = '',
}) => {
  // If empty, show the friendly empty state
  if (!expenses || expenses.length === 0) {
    return <EmptyState className={className} />;
  }

  // Newest first (reverse chronological)
  const sortedExpenses = [...expenses].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {sortedExpenses.map((transaction) => (
        <ExpenseItem
          key={transaction.id}
          transaction={transaction}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default ExpenseList;