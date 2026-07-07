import React from 'react';

const TotalSpent = ({
  total,
  periodLabel = 'this month',
  className = '',
}) => {
  // Format cents to dollars: 124000 → "$1,240.00"
  const formatCurrency = (cents) => {
    const dollars = cents / 100;
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(dollars);
  };

  return (
    <div className={`text-center ${className}`}>
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
        Total spent {periodLabel}
      </p>
      <p className="text-5xl font-extrabold text-gray-900">
        {formatCurrency(total)}
      </p>
    </div>
  );
};

export default TotalSpent;