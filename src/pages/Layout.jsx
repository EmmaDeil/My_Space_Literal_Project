import React from 'react';
import { Outlet } from 'react-router-dom';
import RouterBreadcrumb from '../RouterBreadcrumb';

const Layout = () => {
  const miniMartRouteMap = {
    'products': 'Products',
    'categories': 'Categories', 
    'electronics': 'Electronics',
    'groceries': 'Groceries',
    'dairy': 'Dairy Products',
    'beverages': 'Beverages',
    'cart': 'Shopping Cart',
    'checkout': 'Checkout',
    'profile': 'My Profile',
    'orders': 'Order History'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        {/* Your header content */}
        {/* <div className="container mx-auto px-4 py-3">
          <h1 className="text-2xl font-bold text-gray-800">Mini Mart</h1>
        </div> */}
      </header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-2">
          <RouterBreadcrumb routeMap={miniMartRouteMap} />
        </div>
      </div>

      {/* Main content */}
      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;