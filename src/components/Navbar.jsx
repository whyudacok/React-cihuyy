import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 bg-transparent backdrop-blur-md transition-all duration-300 h-[75px] flex justify-between items-center px-[3%] lg:pl-[7%] xl:pl-[6.5%]">
      <div className="flex items-center gap-8">
        <NavLink to="/" className="text-white font-bold text-xl">
          <img
            alt="logo"
            width="50"
            height="50"
            className="w-32 h-[36px] mt-1"
            src="https://i.ibb.co/THC5BXM/20240717-152630.png"
          />
        </NavLink>
      </div>
      <div className="flex items-center gap-8">
        <NavLink
          to="/anime"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-white hover:text-gray-300'
          }
        >
          Anime
        </NavLink>
        <NavLink
          to="/manga"
          className={({ isActive }) =>
            isActive ? 'text-blue-500' : 'text-white hover:text-gray-300'
          }
        >
          Manga
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
