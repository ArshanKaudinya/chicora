import React, { useState, useEffect } from 'react';
import Navbar from '../components/navbar';

import blacktee from '../assets/store/blacktee.jpg';
import glasses from '../assets/store/glasses.jpg';
import boots from '../assets/store/boots.jpg';
import puffer from '../assets/store/puffer.png';
import handbag from '../assets/store/handbag.jpg';
import jacket from '../assets/store/jacket.jpg';





function Store() {
  const [showPopup, setShowPopup] = useState(false);
  const topRowItems = [
    {
      id: 1,
      name: 'Diesel Sonnenbrille ODL1004',
      price: '$314',
      image: glasses,
    },
    {
      id: 2,
      name: 'Zara black shirt',
      price: '$50',
      image: blacktee,
    },
  ];

  const bottomRowItems = [
    {
      id: 3,
      name: 'NWT Zara lace up Chunky boots',
      price: '$160',
      image: boots,
    },
    {
      id: 4,
      name: 'North face puffer XL',
      price: '$99',
      image: puffer,
    },
    {
      id: 5,
      name: 'Prada black blouson',
      price: '$599',
      image: jacket,
    },
    {
      id: 6,
      name: 'Balenciaga hourglass XS',
      price: '$1300',
      image: handbag,
    },
  ];

  const handleAddToCart = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen font-inter spacing-tight bg-white">
      <Navbar />
      <div className="px-8 mt-32">
        <h1 className="text-6xl text-center font-bold text-ddpurple">Chic. today</h1>
      </div>

      {showPopup && (
        <div className="fixed top-20 ml-[45%] bg-green-500 text-white px-4 py-2 rounded shadow-lg z-50">
          Added to cart!
        </div>
      )}

      <div className="px-20 mt-24 grid grid-cols-1 md:grid-cols-2 gap-6">
        {topRowItems.map((item) => (
          <div
            key={item.id}
            className="p-4 group relative overflow-hidden"
          >
            <div className="w-full h-72 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-ddpurple text-white px-4 py-2 rounded absolute inset-0 m-auto w-max h-max transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            >
              Add to Cart
            </button>

            <div className="mt-4">
              <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
              <p className="text-gray-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 border-b mx-12"></div>

      <div className="px-8 mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pb-16">
        {bottomRowItems.map((item) => (
          <div
            key={item.id}
            className="p-4 group relative overflow-hidden"
          >
            <div className="w-full h-80 overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-fit transition-transform duration-300 group-hover:scale-105"
              />
            </div>

            <button
              onClick={handleAddToCart}
              className="bg-ddpurple text-white px-4 py-2 rounded absolute inset-0 m-auto w-max h-max transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            >
              Add to Cart
            </button>

            <div className="mt-4">
              <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
              <p className="text-gray-600">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Store;
