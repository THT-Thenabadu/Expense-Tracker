import React from 'react';

const EmptyState = ({
  message = 'No expenses yet.',
  actionLabel = 'Tap + to add your first expense.',
  className = '',
}) => {
  return (
    <div
      className={`
        flex
        flex-col
        items-center
        justify-center
        w-full
        py-16
        px-4
        text-center
        ${className}
      `}
    >
      <div className="text-6xl mb-4">💸</div>
      <p className="text-lg font-semibold text-gray-700 mb-2">
        {message}
      </p>
      <p className="text-sm text-gray-500">
        {actionLabel}
      </p>
    </div>
  );
};

export default EmptyState;