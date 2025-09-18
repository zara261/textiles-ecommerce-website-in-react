import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';

const Cart = () => {
  const { items, getCartTotal, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center bg-accent min-h-screen">
        <h1 className="text-3xl font-bold mb-8 text-primary">Your Cart</h1>
        <p className="text-lg text-primary mb-8">Your cart is empty</p>
        <Link to="/products" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition duration-300">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 bg-accent min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-primary">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6 border border-secondary">
            {items.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
            
            <div className="mt-6 flex justify-between items-center">
              <button 
                onClick={clearCart}
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Clear Cart
              </button>
              
              <Link to="/products" className="text-primary hover:text-secondary font-semibold transition-colors">
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6 h-fit border border-secondary">
          <h2 className="text-xl font-semibold mb-4 text-primary">Order Summary</h2>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span className="text-primary">Subtotal</span>
              <span className="text-secondary font-semibold">${getCartTotal().toFixed(2)}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-primary">Shipping</span>
              <span className="text-secondary font-semibold">$10.00</span>
            </div>
            
            <div className="border-t border-secondary pt-2"></div>
            
            <div className="flex justify-between font-semibold text-lg">
              <span className="text-primary">Total</span>
              <span className="text-secondary">${(getCartTotal() + 10).toFixed(2)}</span>
            </div>
          </div>
          
          <Link 
            to="/checkout" 
            className="block w-full bg-primary text-white text-center py-3 rounded-lg hover:bg-secondary transition duration-300 font-semibold"
          >
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;