import React, { useState } from 'react';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { items, getCartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    expDate: '',
    cvv: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would process the payment here
    console.log('Order placed:', { formData, items });
    clearCart();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-bg-primary">Order Placed Successfully!</h1>
        <p className="text-gray-600 mb-8">Thank you for your purchase. Your order has been confirmed.</p>
        <a href="/" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition duration-300">
          Continue Shopping
        </a>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Checkout</h1>
        <p className="text-gray-600 mb-8">Your cart is empty. Please add items to your cart before checkout.</p>
        <a href="/products" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-secondary transition duration-300">
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-primary">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 mb-6 border border-secondary">
            <h2 className="text-xl font-semibold mb-4 text-primary">Shipping Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-primary mb-2">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors hover:border-primary"
                  required
                />
              </div>
              
              <div>
                <label className="block text-primary mb-2">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors hover:border-primary"
                  required
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label className="block text-primary mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors hover:border-primary"
                required
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-primary mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors hover:border-primary"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-primary mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors hover:border-primary"
                  required
                />
              </div>
              
              <div>
                <label className="block text-primary mb-2">ZIP Code</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors hover:border-primary"
                  required
                />
              </div>
            </div>
            
            <h2 className="text-xl font-semibold mb-4 text-primary">Payment Information</h2>
            
            <div className="mb-4">
              <label className="block text-primary mb-2">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors hover:border-primary"
                placeholder="1234 5678 9012 3456"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-primary mb-2">Expiration Date</label>
                <input
                  type="text"
                  name="expDate"
                  value={formData.expDate}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors hover:border-primary"
                  placeholder="MM/YY"
                  required
                />
              </div>
              
              <div>
                <label className="block text-primary mb-2">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-secondary rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-colors hover:border-primary"
                  placeholder="123"
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary text-white py-3 rounded-lg hover:bg-secondary transition duration-300 font-semibold"
            >
              Place Order
            </button>
          </form>
        </div>
        
        <div>
          <div className="bg-white rounded-lg shadow-md p-6 border border-secondary">
            <h2 className="text-xl font-semibold mb-4 text-primary">Order Summary</h2>
            
            {items.map(item => (
              <div key={item.id} className="flex justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-primary">{item.name}</h3>
                  <p className="text-secondary">Qty: {item.quantity}</p>
                </div>
                <span className="text-secondary font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
            
            <div className="border-t border-secondary pt-4 mt-4">
              <div className="flex justify-between mb-2">
                <span className="text-primary">Subtotal</span>
                <span className="text-secondary font-semibold">${getCartTotal().toFixed(2)}</span>
              </div>
              
              <div className="flex justify-between mb-2">
                <span className="text-primary">Shipping</span>
                <span className="text-secondary font-semibold">$10.00</span>
              </div>
              
              <div className="flex justify-between font-semibold text-lg">
                <span className="text-primary">Total</span>
                <span className="text-secondary">${(getCartTotal() + 10).toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;