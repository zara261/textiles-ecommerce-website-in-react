  import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full bg-accent min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="text-white py-20 w-full" style={{
  background: 'radial-gradient(circle at top center, var(--color-primary) 0%, var(--color-secondary) 100%)'
}}>
  <div className="max-w-7xl mx-auto px-4 text-center">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">Premium Textiles for Every Need</h1>
    <p className="text-xl mb-8">Discover our exclusive collection of high-quality fabrics</p>
    <Link to="/products" className="bg-accent text-primary px-6 py-3 rounded-lg font-semibold hover:bg-white transition duration-300">
      Shop Now
    </Link>
  </div>
</section>

      {/* Rest of your home page content */}
      <section className="py-16 w-full bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-primary">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-secondary">
              <img src="http://localhost:5173/textiles-ecommerce-website-in-react/images/cotton.avif" alt="Cotton Fabric" className="w-full h-80 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-primary">Premium Cotton</h3>
                <p className="text-gray-600 mb-4">Soft, breathable cotton perfect for clothing</p>
                <p className="text-secondary font-bold">$24.99 / yard</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-secondary">
              <img src="http://localhost:5173/textiles-ecommerce-website-in-react/images/silk.jpg" alt="Silk Fabric" className="w-full h-80 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-primary">Luxury Silk</h3>
                <p className="text-gray-600 mb-4">Elegant silk for special occasion garments</p>
                <p className="text-secondary font-bold">$49.99 / yard</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-secondary">
              <img src="http://localhost:5173/textiles-ecommerce-website-in-react/images/linen.jpg" alt="Linen Fabric" className="w-full h-80 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-primary">Natural Linen</h3>
                <p className="text-gray-600 mb-4">Durable and comfortable linen for all seasons</p>
                <p className="text-secondary font-bold">$34.99 / yard</p>
              </div>
            </div>
          </div>
           <div className="text-center mt-8">
            <Link to="/products" className="text-primary font-semibold hover:text-secondary transition-colors">
              View All Products →
            </Link>
          </div>
        </div>
      </section>

        {/* About Section */}
      <section className="bg-secondary py-16 w-full">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-primary">
            <h2 className="text-3xl font-bold mb-6">About Elite Textiles</h2>
            <p className="mb-6">
              For over 20 years, Elite Textiles has been providing premium quality fabrics to designers, 
              manufacturers, and DIY enthusiasts. Our commitment to quality and customer satisfaction 
              has made us a trusted name in the textile industry.
            </p>
            <p>
              We source our materials from the finest producers around the world to ensure that our 
              customers receive only the best products for their projects.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home; 
      

    