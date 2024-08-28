// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl">Anime Site</div>
        <div className="flex space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/anime" className="text-white">Anime</Link>
          <Link to="/manga" className="text-white">Manga</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
