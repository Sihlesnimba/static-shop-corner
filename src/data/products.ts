
export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Leather Wallet",
    description: "Handcrafted genuine leather wallet with multiple card slots and a coin pocket.",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "accessories"
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    description: "Soft and comfortable 100% organic cotton t-shirt, perfect for everyday wear.",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "clothing"
  },
  {
    id: 3,
    name: "Smart Home Speaker",
    description: "Voice-controlled smart speaker with premium sound quality and virtual assistant.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "electronics"
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    description: "Double-walled insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "accessories"
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    description: "True wireless earbuds with noise cancellation and long battery life.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "electronics"
  },
  {
    id: 6,
    name: "Minimalist Desk Lamp",
    description: "Modern LED desk lamp with adjustable brightness and color temperature.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "home"
  }
];
