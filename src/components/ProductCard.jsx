import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 border border-secondary">
      <Link to={`/product/${product.id}`}>
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      </Link>
      <div className="p-4">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold mb-2 hover:text-secondary text-primary">{product.name}</h3>
        </Link>
        <p className="text-gray-600 mb-2 capitalize">{product.category}</p>
        <p className="text-secondary font-bold mb-4">${product.price.toFixed(2)} / yard</p>
        <button 
          onClick={handleAddToCart}
          className="w-full btn-primary py-2 rounded transition duration-300"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;