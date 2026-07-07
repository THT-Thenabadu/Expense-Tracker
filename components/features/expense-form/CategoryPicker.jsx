import React from 'react';
import CategoryBadge from '@/components/ui/CategoryBadge';

const CategoryPicker = ({
  selectedCategory,
  onSelect,
  categories,
  error,
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label className="text-sm font-semibold text-gray-700">
        Category
      </label>
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const isSelected = selectedCategory?.name === cat.name;

          return (
            <button
              key={cat.name}
              type="button"
              onClick={() => onSelect(cat)}
              className={`
                px-3
                py-2
                rounded-lg
                border-2
                transition-all
                duration-200
                ${isSelected
                  ? 'border-blue-500 bg-blue-50 shadow-sm'
                  : 'border-blue-100 bg-white hover:border-blue-300 hover:bg-blue-50/50'
                }
              `}
            >
              <CategoryBadge category={cat} size="sm" />
            </button>
          );
        })}
      </div>
      {error && (
        <span className="text-xs font-semibold text-red-500 mt-0.5">
          {error}
        </span>
      )}
    </div>
  );
};

export default CategoryPicker;