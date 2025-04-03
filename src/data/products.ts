
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
    price: 949.99,
    image: "https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "accessories"
  },
  {
    id: 2,
    name: "Organic Cotton T-Shirt",
    description: "Soft and comfortable 100% organic cotton t-shirt, perfect for everyday wear.",
    price: 474.99,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "clothing"
  },
  {
    id: 3,
    name: "Smart Home Speaker",
    description: "Voice-controlled smart speaker with premium sound quality and virtual assistant.",
    price: 2469.99,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "electronics"
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    description: "Double-walled insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours.",
    price: 664.99,
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "accessories"
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    description: "True wireless earbuds with noise cancellation and long battery life.",
    price: 1709.99,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "electronics"
  },
  {
    id: 6,
    name: "Minimalist Desk Lamp",
    description: "Modern LED desk lamp with adjustable brightness and color temperature.",
    price: 1139.99,
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: "home"
  }
];
