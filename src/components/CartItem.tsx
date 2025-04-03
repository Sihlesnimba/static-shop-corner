
import React from 'react';
import { MinusCircle, PlusCircle, Trash2 } from 'lucide-react';
import { Button } from './ui/button';
import { Product } from '../data/products';
import { useCart } from '../contexts/CartContext';

interface CartItemProps {
  item: Product & { quantity: number };
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  
  return (
    <div className="flex items-center py-4 border-b">
      <div className="w-16 h-16 mr-4 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-grow">
        <h4 className="font-medium">{item.name}</h4>
        <p className="text-shop-darkGray text-sm">${item.price.toFixed(2)} each</p>
      </div>
      <div className="flex items-center gap-2">
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8"
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
        >
          <MinusCircle className="h-4 w-4" />
        </Button>
        <span className="w-8 text-center">{item.quantity}</span>
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-8 w-8"
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
        >
          <PlusCircle className="h-4 w-4" />
        </Button>
      </div>
      <div className="w-24 text-right font-medium">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        className="ml-4 text-red-500"
        onClick={() => removeFromCart(item.id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default CartItem;
