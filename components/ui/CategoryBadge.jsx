import React from 'react';

const CategoryBadge = ({
  category,
  size = 'md',
  className = '',
  ...rest
}) => {
  const { name, color, icon } = category;

  const sizeStyles = {
    sm: 'text-xs gap-1.5',
    md: 'text-sm gap-2',
  };

  const dotSizes = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
  };

  return (
    <div
      className={`
        inline-flex
        items-center
        font-medium
        text-gray-700
        ${sizeStyles[size]}
        ${className}
      `}
      {...rest}
    >
      <span
        className={`block rounded-full ${dotSizes[size]}`}
        style={{ backgroundColor: color }}
      />
      {icon && <span className="text-gray-500">{icon}</span>}
      <span>{name}</span>
    </div>
  );
};

export default CategoryBadge;