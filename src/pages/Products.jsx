import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  // Sample product data
  const products = [
    { id: 1, name: 'Premium Cotton', price: 24.99, category: 'cotton', image: '/images/p-coton.jpg' },
    { id: 2, name: 'Luxury Silk', price: 49.99, category: 'silk', image: '/images/l-silk.avif' },
    { id: 3, name: 'Natural Linen', price: 34.99, category: 'linen', image: '/images/n-linen.webp' },
    { id: 4, name: 'Soft Wool', price: 39.99, category: 'wool', image: '/images/s-whool.jpg' },
    { id: 5, name: 'Cotton Blend', price: 19.99, category: 'cotton', image: '/images/b-cotton.jpg' },
    { id: 6, name: 'Patterned Silk', price: 54.99, category: 'silk', image: '/images/p-silk.webp' },
    { id: 7, name: 'Heavy Linen', price: 29.99, category: 'linen', image: '/images/h-linen.jpg' },
    { id: 8, name: 'Merino Wool', price: 44.99, category: 'wool', image: '/images/m-whool.avif' },
  ];

  const categories = ['all', 'cotton', 'silk', 'linen', 'wool'];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="container mx-auto px-4 py-8 bg-accent min-h-screen">
          {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Product
          </h1>
          <p className="text-xl text-primary max-w-3xl mx-auto">
            Get in touch with us for any inquiries about our premium textiles.
            We're here to help you with your fabric needs.
          </p>
        </div>

      
      {/* Category Filters */}
      <div className="mb-8 p-6 bg-white rounded-lg shadow-md border border-secondary">
        <h2 className="text-xl font-semibold mb-4 text-primary">Filter by Category</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category 
                  ? 'bg-primary text-white hover:bg-secondary hover:text-primary' 
                  : 'bg-secondary text-primary hover:bg-primary hover:text-white'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* No products message */}
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-primary">No products found in this category.</p>
          <button 
            onClick={() => setSelectedCategory('all')}
            className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary transition-colors"
          >
            View All Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;