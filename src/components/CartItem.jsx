import React from 'react';
import { useCart } from '../context/CartContext';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    updateQuantity(item.id, newQuantity);
  };

  return (
    <div className="flex items-center border-b border-secondary py-4">
     
      <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded border border-secondary" />
      
      <div className="ml-4 flex-grow">
        <h3 className="text-lg font-semibold text-primary">{item.name}</h3>
        <p className="text-secondary capitalize">{item.category}</p>
        <p className="text-secondary font-bold">${item.price.toFixed(2)} / yard</p>
      </div>
      
      <div className="flex items-center">
        <select 
          value={item.quantity} 
          onChange={handleQuantityChange}
          className="border border-secondary rounded px-2 py-1 mr-2 text-primary"
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
        
        <button 
          onClick={() => removeFromCart(item.id)}
          className="text-red-600 hover:text-red-800 font-semibold"
        >
          Remove
        </button>
      </div>
      
      <div className="ml-4">
        <p className="font-semibold text-secondary">${(item.price * item.quantity).toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartItem;