import React from 'react';

const Input = ({
  value,
  onChange,
  placeholder = '',
  type = 'text',
  label,
  error,
  className = '',
  style = {},
  ...rest
}) => {
  const hasError = Boolean(error);

  return (
    <div 
      className={`flex flex-col gap-1.5 w-full ${className}`}
      style={style}
    >
      {label && (
        <label className="text-sm font-semibold text-gray-700">
          {label}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`
          w-full
          px-4
          py-2.5
          bg-white
          text-gray-900
          text-sm
          font-medium
          rounded-lg
          border-2
          outline-none
          transition-all
          duration-200
          placeholder:text-gray-400
          placeholder:font-normal
          ${hasError
            ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-100'
            : 'border-blue-100 focus:border-blue-500 focus:ring-4 focus:ring-blue-100'
          }
        `}
        {...rest}
      />
      {typeof error === 'string' && error && (
        <span className="text-xs font-semibold text-red-500 mt-0.5">
          {error}
        </span>
      )}
    </div>
  );
};

export default Input; 