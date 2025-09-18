import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 w-full">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 justify-content text-secondary">Elite Textiles</h3>
            <p>Premium quality fabrics for all your needs.We believe in sustainability and responsibility. That’s why our fabrics are ethically sourced and produced with care for the environment, ensuring a better future for fashion and design.</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-secondary">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="/products" className="hover:text-accent transition-colors">Products</a></li>
              <li><a href="/contact" className="hover:text-accent transition-colors">Contact</a></li>
              {/* <li><a href="/cart" className="hover:text-accent transition-colors">Cart</a></li> */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-secondary">Contact Us</h3>
            <p>Email: elitetextiles@gmail.com</p>
            <p>Phone: 0300-45678910</p>
          </div>
        </div>
        
        <div className="border-t border-secondary mt-8 pt-6 text-center">
          <p>&copy; 2025 Elite Textiles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;