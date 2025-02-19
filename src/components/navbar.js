import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="flex items-center justify-between px-10 py-7 bg-white shadow-sm">
      
      <div className="text-pink-500 text-xl font-bold">
      <Link to="/" className="text-pink-500 text-xl font-bold">Chicora.</Link>
      </div>

      <nav className="flex items-center space-x-6 text-sm font-medium">
        <a href="#explore" className="hover:text-pink-500">Explore</a>
        <a href="#contest" className="hover:text-pink-500">Contest</a>
        <a href="#store" className="hover:text-pink-500">Store</a>

        <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-400">
          <span className="material-icons">person</span>
        </div>

        <button className="bg-pink-100 text-pink-700 px-4 py-1 rounded-full hover:bg-pink-200 transition">
          Premium
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
