import React from 'react';

const PageHeader = ({
  title,
  showBack = false,
  onBack,
  action,
  className = '',
  ...rest
}) => {
  return (
    <div
      className={`
        flex
        items-center
        justify-between
        w-full
        py-4
        border-b
        border-blue-100
        ${className}
      `}
      {...rest}
    >
      {/* Left: Back arrow + Title */}
      <div className="flex items-center gap-3">
        {showBack && (
          <button
            onClick={onBack}
            className="
              flex
              items-center
              justify-center
              w-9
              h-9
              rounded-lg
              text-blue-600
              hover:bg-blue-50
              active:bg-blue-100
              transition-all
              duration-200
              focus:outline-none
              focus:ring-2
              focus:ring-blue-400
              focus:ring-offset-2
            "
            aria-label="Go back"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
          </button>
        )}
        <h1 className="text-xl font-bold text-gray-900">
          {title}
        </h1>
      </div>

      {/* Right: Optional action */}
      {action && (
        <div>{action}</div>
      )}
    </div>
  );
};

export default PageHeader;