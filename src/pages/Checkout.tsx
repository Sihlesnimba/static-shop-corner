
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CartItem from '../components/CartItem';
import { Button } from '@/components/ui/button';
import { useCart } from '../contexts/CartContext';
import { ArrowLeft } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Checkout = () => {
  const { items, getTotalPrice, clearCart } = useCart();
  const [isCheckoutComplete, setIsCheckoutComplete] = useState(false);
  
  const handleCheckout = () => {
    setIsCheckoutComplete(true);
    clearCart();
  };
  
  if (isCheckoutComplete) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow container mx-auto p-8 flex flex-col items-center justify-center">
          <div className="text-center max-w-md">
            <h1 className="text-3xl font-bold text-shop-navy mb-4">Thank You!</h1>
            <p className="text-lg mb-8">Your order has been received. We'll process it right away!</p>
            <Link to="/">
              <Button className="bg-shop-navy hover:bg-opacity-90">
                Return to Shop
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto p-8">
        <Link to="/" className="flex items-center text-shop-navy mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Continue Shopping
        </Link>
        
        <div className="flex gap-8">
          <div className="flex-grow">
            <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
            
            {items.length === 0 ? (
              <div className="text-center py-8 bg-shop-lightGray rounded-md">
                <p className="text-shop-darkGray">Your cart is empty</p>
                <Link to="/" className="text-shop-navy underline mt-2 inline-block">
                  Start shopping
                </Link>
              </div>
            ) : (
              <div>
                {items.map(item => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            )}
          </div>
          
          {items.length > 0 && (
            <div className="w-80">
              <h2 className="text-xl font-bold mb-4">Order Summary</h2>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${getTotalPrice().toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>${(getTotalPrice() * 0.07).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${(getTotalPrice() * 1.07).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-shop-navy hover:bg-opacity-90"
                    onClick={handleCheckout}
                  >
                    Checkout
                  </Button>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
