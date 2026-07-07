import React from 'react';
import CategoryBadge from '@/components/ui/CategoryBadge';
import { formatCurrency } from '@/lib/utils';

const ExpenseItem = ({
  transaction,
  onDelete,
  onEdit,
  className = '',
}) => {
  const { id, amount, category, note, date } = transaction;

  // Format amount as "$5.00"
  const formattedAmount = formatCurrency(amount);

  // Format date as "Today", "Yesterday", or "Jul 5"
  const formatDate = (dateString) => {
    const d = new Date(dateString);
    const now = new Date();

    const isToday = d.toDateString() === now.toDateString();
    const isYesterday = new Date(now - 86400000).toDateString() === d.toDateString();

    if (isToday) return 'Today';
    if (isYesterday) return 'Yesterday';
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  return (
    <div
      onClick={() => onEdit?.(transaction)}
      className={`
        flex
        items-center
        justify-between
        gap-4
        w-full
        p-4
        bg-white
        rounded-xl
        border
        border-blue-100
        shadow-sm
        hover:shadow-md
        hover:border-blue-200
        transition-all
        duration-200
        cursor-pointer
        ${className}
      `}
    >
      {/* Left: Amount + Note */}
      <div className="flex items-center gap-4 flex-1 min-w-0">
        <div className="flex flex-col min-w-0">
          <span className="text-lg font-bold text-gray-900">
            {formattedAmount}
          </span>
          {note && (
            <span className="text-xs text-gray-500 truncate mt-0.5">
              {note}
            </span>
          )}
        </div>

        {/* Category badge */}
        <CategoryBadge category={category} size="sm" />
      </div>

      {/* Right: Date + Delete */}
      <div className="flex items-center gap-3 shrink-0">
        <span className="text-xs text-gray-400 font-medium">
          {formatDate(date)}
        </span>

        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation(); // Don't trigger onEdit when deleting
            onDelete?.(id);
          }}
          className="
            p-2
            rounded-lg
            text-gray-400
            hover:text-red-500
            hover:bg-red-50
            transition-all
            duration-200
            focus:outline-none
            focus:ring-2
            focus:ring-red-400
            focus:ring-offset-2
          "
          aria-label="Delete transaction"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="3 6 5 6 21 6" />
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;