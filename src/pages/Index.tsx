
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import ProductCard from '../components/ProductCard';
import CartItem from '../components/CartItem';
import { useCart } from '../contexts/CartContext';
import { products } from '../data/products';
import { ShoppingCart, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const Index = () => {
  const { items, getTotalItems, getTotalPrice } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="bg-shop-navy text-white py-16 px-8 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to ShopCorner</h1>
        <p className="text-xl max-w-2xl mx-auto">
          Discover our curated collection of premium products for your everyday needs.
        </p>
      </div>
      
      <div className="container mx-auto px-8 py-12">
        <h2 className="text-2xl font-bold mb-8">Featured Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      
      <Sheet open={isCartOpen} onOpenChange={setIsCartOpen}>
        <SheetTrigger asChild>
          <Button 
            className="fixed bottom-8 right-8 rounded-full h-16 w-16 bg-shop-navy shadow-lg flex items-center justify-center"
            onClick={() => setIsCartOpen(true)}
          >
            <ShoppingCart className="h-6 w-6" />
            {getTotalItems() > 0 && (
              <span className="cart-badge">{getTotalItems()}</span>
            )}
          </Button>
        </SheetTrigger>
        <SheetContent className="w-[400px] sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Your Cart</SheetTitle>
          </SheetHeader>
          <div className="mt-6 flex flex-col h-[calc(100vh-180px)]">
            <div className="flex-grow overflow-y-auto">
              {items.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map(item => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </div>
              )}
            </div>
            
            {items.length > 0 && (
              <div className="border-t pt-4 mt-auto">
                <div className="flex justify-between font-bold text-lg mb-4">
                  <span>Total</span>
                  <span>${getTotalPrice().toFixed(2)}</span>
                </div>
                <Link to="/checkout" onClick={() => setIsCartOpen(false)}>
                  <Button className="w-full bg-shop-navy">
                    Checkout
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Index;
