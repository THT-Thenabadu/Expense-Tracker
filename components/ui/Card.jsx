import React from 'react';

const Card = ({
  children,
  height = 'auto',
  width = '100%',
  className = '',
  style = {},
  ...rest
}) => {
  return (
    <div
      className={`
        bg-white
        border
        border-blue-100
        rounded-xl
        shadow-md
        p-6
        transition-all
        duration-200
        hover:shadow-lg
        hover:border-blue-200
        ${className}
      `}
      style={{
        height,
        width,
        ...style
      }}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;