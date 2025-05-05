import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';
const Header = () => {
  const { 
    searchQuery, 
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    cart,
    user
  } = useAppContext();

  return (
    <header className="w-full flex flex-col md:flex-row justify-between items-center p-4 shadow bg-white sticky top-0 z-50">
      <div className="flex justify-between w-full md:w-auto items-center mb-4 md:mb-0">
        <Link to="/dashboard" className="text-2xl font-bold text-purple-600">
          ShivAccessories
        </Link>
        <button className="md:hidden p-2">
          {/* Mobile menu icon */}
        </button>
      </div>

      <nav 
        className="flex flex-col md:flex-row gap-4 items-center w-full md:w-auto"
        aria-label="Main navigation"
      >
        <input
          type="text"
          placeholder="Search products..."
          aria-label="Product search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border px-2 py-1 rounded w-full md:w-64"
        />

        <select 
          value={selectedCategory} 
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="border px-2 py-1 rounded w-full md:w-auto"
          aria-label="Filter products by category"
        >
          <option value="all">All Categories</option>
          <option value="jewellery">Jewellery</option>
          <option value="watches">Watches</option>
        </select>

        <div className="flex gap-4 w-full md:w-auto justify-between">
          <Link to="/history" className="hover:text-purple-600 px-2 py-1">
            Order History
          </Link>
          
          <Link 
            to="/cart" 
            className="relative hover:text-purple-600 px-2 py-1"
            aria-label="Shopping cart"
          >
            Cart
            {cart.length > 0 && (
              <span className="absolute -top-2 -right-3 bg-purple-600 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {cart.length}
              </span>
            )}
          </Link>

          {user ? (
            <Link 
              to="/profile" 
              className="hover:text-purple-600 px-2 py-1"
              aria-label="User profile"
            >
              {user.name || 'Profile'}
            </Link>
          ) : (
            <Link 
              to="/login" 
              className="hover:text-purple-600 px-2 py-1"
              aria-label="Login"
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;