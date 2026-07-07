import React from 'react';

const CategoryBreakdown = ({
  breakdown,
  onCategoryClick,
  className = '',
}) => {
  if (!breakdown || breakdown.length === 0) {
    return (
      <div className={`text-center py-8 text-gray-400 text-sm ${className}`}>
        No spending data yet.
      </div>
    );
  }

  // Sort biggest spender first
  const sorted = [...breakdown].sort((a, b) => b.amount - a.amount);

  // Find max amount for bar scaling
  const maxAmount = sorted[0].amount;

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {sorted.map((item) => {
        const barWidth = `${(item.amount / maxAmount) * 100}%`;

        return (
          <button
            key={item.categoryId}
            type="button"
            onClick={() => onCategoryClick?.(item.categoryId)}
            className="flex flex-col gap-1.5 text-left w-full group"
          >
            {/* Label row */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full shrink-0"
                  style={{ backgroundColor: item.color }}
                />
                <span className="font-semibold text-gray-700">
                  {item.categoryName}
                </span>
              </div>
              <span className="font-bold text-gray-900">
                ${(item.amount / 100).toFixed(2)}
              </span>
            </div>

            {/* Bar */}
            <div className="w-full h-2.5 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-500 ease-out group-hover:opacity-80"
                style={{
                  width: barWidth,
                  backgroundColor: item.color,
                }}
              />
            </div>

            {/* Percentage */}
            <span className="text-xs text-gray-400 font-medium">
              {item.percentage}%
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryBreakdown;