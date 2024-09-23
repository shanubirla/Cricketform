import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-green-700 text-white p-4 shadow-md">
      <nav className="container mx-auto flex justify-between">
        <div className="text-2xl font-bold">Cricket League</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-yellow-300">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-yellow-300">About</Link>
          </li>
          <li>
            <Link to="/tournaments" className="hover:text-yellow-300">Tournaments</Link>
          </li>
          <li>
            <Link to="/registration" className="hover:text-yellow-300">Registration</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-yellow-300">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
