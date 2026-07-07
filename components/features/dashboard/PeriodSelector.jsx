import React from 'react';

const PeriodSelector = ({
  selected,
  onSelect,
  options = ['month', 'lastMonth', 'all'],
  className = '',
}) => {
  const labels = {
    month: 'This Month',
    lastMonth: 'Last Month',
    week: 'This Week',
    all: 'All Time',
  };

  return (
    <div
      className={`
        inline-flex
        items-center
        gap-1
        p-1
        bg-gray-100
        rounded-xl
        ${className}
      `}
    >
      {options.map((option) => {
        const isSelected = selected === option;

        return (
          <button
            key={option}
            type="button"
            onClick={() => onSelect(option)}
            className={`
              px-4
              py-2
              text-sm
              font-semibold
              rounded-lg
              transition-all
              duration-200
              ${isSelected
                ? 'bg-white text-blue-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
              }
            `}
          >
            {labels[option] || option}
          </button>
        );
      })}
    </div>
  );
};

export default PeriodSelector;