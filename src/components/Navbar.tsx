
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { Button } from './ui/button';

const Navbar = () => {
  const { getTotalItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div>
        <Link to="/" className="text-2xl font-bold text-shop-navy">ShopCorner</Link>
      </div>
      
      <div className="flex items-center gap-6">
        <Link to="/" className="text-shop-darkGray hover:text-shop-navy">Home</Link>
        <Link to="/" className="text-shop-darkGray hover:text-shop-navy">Products</Link>
        <Link to="/" className="text-shop-darkGray hover:text-shop-navy">About</Link>
        <Link to="/" className="text-shop-darkGray hover:text-shop-navy">Contact</Link>
        
        <div className="relative">
          <Button 
            variant="ghost" 
            className="relative p-2"
            onClick={() => setIsCartOpen(!isCartOpen)}
          >
            <ShoppingCart className="text-shop-navy" />
            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
