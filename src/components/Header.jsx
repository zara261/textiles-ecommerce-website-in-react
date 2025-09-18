import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { getCartItemsCount } = useCart();

  return (
    <header className="bg-primary text-white shadow-md sticky top-0 z-50  w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-accent">
          Elite Textiles
        </Link>
        
        <nav className="hidden md:flex space-x-8 ">
          <Link to="/" className="text-white hover:text-secondary transition-colors">Home</Link>
          <Link to="/products" className="text-white hover:text-secondary transition-colors">Products</Link>
            <Link to="/contact" className="text-white hover:text-secondary transition-colors">Contact</Link>
          {/* <Link to="/cart" className="text-white hover:text-secondary transition-colors">Cart</Link> */}
        </nav>
        
        <Link to="/cart" className="relative">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
          {getCartItemsCount() > 0 && (
            <span className="absolute -top-2 -right-2 bg-secondary text-primary text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
              {getCartItemsCount()}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
};

export default Header;