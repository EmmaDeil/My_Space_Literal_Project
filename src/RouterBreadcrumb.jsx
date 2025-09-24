import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const RouterBreadcrumb = ({ routeMap = {} }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);
  
  // Default route mapping - you can customize this
  const defaultRouteMap = {
    '': 'Home',
    'products': 'Products',
    'categories': 'Categories',
    'cart': 'Shopping Cart',
    'checkout': 'Checkout',
    'profile': 'Profile',
    'orders': 'Orders',
    ...routeMap
  };

  return (
    <nav 
      style={{
        '--bs-breadcrumb-divider': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M2.5 0L1 1.5 3.5 4 1 6.5 2.5 8l4-4-4-4z' fill='%236c757d'/%3E%3C/svg%3E\")"
      }} 
      aria-label="breadcrumb"
    >
      <ol className="breadcrumb">
        {/* Home link */}
        <li className="breadcrumb-item">
          <Link to="/">Home</Link>
        </li>
        
        {/* Dynamic breadcrumb items */}
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const label = defaultRouteMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);

          return (
            <li 
              key={index}
              className={`breadcrumb-item ${isLast ? 'active' : ''}`}
              aria-current={isLast ? 'page' : undefined}
            >
              {isLast ? (
                label
              ) : (
                <Link to={routeTo}>{label}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default RouterBreadcrumb;