import React, { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Miracle Kitchen Set",
    price: 49.99,
    description: "Amazing 20-piece kitchen set that does it all!",
    image: "/lovable-uploads/shopping/kitchen-set.png"
  },
  {
    id: 2,
    name: "Super Vacuum 2000",
    price: 299.99,
    description: "The strongest vacuum you'll ever own!",
    image: "/lovable-uploads/shopping/vacuum.png"
  },
  // Add more products as needed
];

const HomeShoppingChannel: React.FC = () => {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [orderCount, setOrderCount] = useState(0);
  const [showOrderPrompt, setShowOrderPrompt] = useState(false);

  const product = PRODUCTS[currentProduct];

  const handleOrder = () => {
    setOrderCount(prev => prev + 1);
    setShowOrderPrompt(true);
    setTimeout(() => setShowOrderPrompt(false), 3000);
  };

  return (
    <div className="h-full font-mono bg-black">
      {/* Video Feed */}
      <div className="relative w-full h-3/4">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/s-WuZqYKGYI?autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=s-WuZqYKGYI"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>

        {/* Overlay with product info */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/80 p-4">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-yellow-500 text-2xl">{product.name}</div>
              <div className="text-green-500 text-4xl">ONLY ${product.price}</div>
            </div>
            <div className="text-white text-xl animate-pulse">
              CALL NOW: 1-800-555-0199
            </div>
          </div>
        </div>
      </div>

      {/* Product details */}
      <div className="p-4 bg-gradient-to-b from-blue-900 to-black">
        <div className="flex gap-8">
          <div className="w-1/3">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-auto border-2 border-yellow-500"
            />
          </div>

          <div className="w-2/3">
            <p className="text-gray-400 mb-4">{product.description}</p>
            
            <div className="text-green-500 text-xl mb-4 animate-pulse">
              LIMITED TIME OFFER!
            </div>

            <button
              onClick={handleOrder}
              className="bg-yellow-500 text-black px-4 py-2 font-bold"
            >
              ORDER NOW!
            </button>

            {showOrderPrompt && (
              <div className="mt-4 text-green-500">
                Thank you for your order! #{orderCount}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Order counter */}
      <div className="absolute bottom-4 right-4 text-yellow-500">
        Orders today: {orderCount}
      </div>
    </div>
  );
};

export default HomeShoppingChannel; 