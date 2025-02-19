import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.png';

function Navbar() {
  return (
    <header className="flex font-inter spacing-tight items-center text-chicpink justify-between px-12 py-7 bg-white shadow-sm">
      <div className="text-chicpink text-xl font-bold">
        <Link to="/" className="text-chicpink text-2xl font-bold">
          Chicora.
        </Link>
      </div>

      <nav className="flex items-center space-x-6 text-m font-medium">
        <Link
          to="/explore"
          className="transition-colors duration-300"
        >
          Explore
        </Link>
        <Link
          to="/contests"
          className="transition-colors duration-300 hover:text-chicpink"
        >
          Contest
        </Link>
        <Link
          to="/store"
          className="transition-colors duration-300 hover:text-chicpink"
        >
          Store
        </Link>

        <Link to="/account" className="w-9 h-9 rounded-full overflow-hidden">
          <img
            src={avatar}
            alt="Avatar"
            className="w-full h-full object-cover"
          />
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;

