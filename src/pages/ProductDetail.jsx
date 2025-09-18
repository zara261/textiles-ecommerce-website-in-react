import React from 'react';
import { useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  
  // Sample product data - in a real app, you'd fetch this based on the ID
  const product = {
    id: 1,
    name: 'Premium Cotton',
    price: 24.99,
    category: 'cotton',
    image: 'https://via.placeholder.com/400x300',
    description: 'Our premium cotton fabric is soft, breathable, and perfect for clothing. Made from 100% organic cotton, this fabric is ideal for shirts, dresses, and other garments that require comfort and durability.',
    details: [
      '100% Organic Cotton',
      'Medium weight (4.5 oz/sq yd)',
      'Width: 45 inches',
      'Machine washable',
      'Wrinkle-resistant'
    ]
  };

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.image} alt={product.name} className="w-full rounded-lg shadow-md" />
        </div>
        
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-indigo-600 text-2xl font-bold mb-4">${product.price.toFixed(2)} / yard</p>
          
          <div className="mb-6">
            <span className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm capitalize">
              {product.category}
            </span>
          </div>
          
          <p className="text-gray-700 mb-6">{product.description}</p>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-3">Product Details</h2>
            <ul className="list-disc list-inside space-y-1">
              {product.details.map((detail, index) => (
                <li key={index} className="text-gray-700">{detail}</li>
              ))}
            </ul>
          </div>
          
          <button 
            onClick={handleAddToCart}
            className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;