import React from 'react';

const Button = ({
  children,
  label = 'Click me',
  height = '40px',
  width = 'auto',
  minWidth = '120px',
  onClick,
  disabled = false,
  type = 'button',
  className = '',
  style = {},
  ...rest
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex
        items-center
        justify-center
        gap-2
        px-6
        bg-blue-600
        text-white
        font-semibold
        text-sm
        rounded-lg
        shadow-md
        transition-all
        duration-200
        ease-in-out
        hover:bg-blue-700
        hover:shadow-lg
        hover:-translate-y-0.5
        active:bg-blue-800
        active:translate-y-0
        active:shadow-sm
        focus:outline-none
        focus:ring-2
        focus:ring-blue-400
        focus:ring-offset-2
        disabled:opacity-50
        disabled:cursor-not-allowed
        disabled:hover:translate-y-0
        disabled:hover:bg-blue-600
        disabled:hover:shadow-md
        ${className}
      `}
      style={{
        height,
        width,
        minWidth,
        ...style
      }}
      {...rest}
    >
      {children || label}
    </button>
  );
};

export default Button;