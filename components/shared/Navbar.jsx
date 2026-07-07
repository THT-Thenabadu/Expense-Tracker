import React from 'react';

const Navbar = ({
  activeLink = 'Home',
  onNavigate,
  className = '',
  ...rest
}) => {
  const links = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Add', href: '/add', icon: '➕' },
    { name: 'Transactions', href: '/transactions', icon: '📋' },
  ];

  return (
    <nav
      className={`
        w-full
        bg-white
        border-b
        border-blue-100
        shadow-sm
        ${className}
      `}
      {...rest}
    >
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">$</span>
            </div>
            <span className="text-lg font-bold text-gray-900">Budget</span>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center gap-1">
            {links.map((link) => {
              const isActive = activeLink === link.name;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate?.(link.name);
                  }}
                  className={`
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-lg
                    text-sm
                    font-semibold
                    transition-all
                    duration-200
                    ${isActive
                      ? 'bg-blue-50 text-blue-600'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >
                  <span className="text-base">{link.icon}</span>
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;