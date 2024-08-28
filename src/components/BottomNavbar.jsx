import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white h-16 flex justify-around items-center">
      <NavLink 
        to="/anime" 
        className={({ isActive }) => 
          isActive 
            ? 'text-xl transform scale-125 transition-transform duration-300' 
            : 'text-lg'
        }
      >
        Anime
      </NavLink>
      <NavLink 
        to="/manga" 
        className={({ isActive }) => 
          isActive 
            ? 'text-xl transform scale-125 transition-transform duration-300' 
            : 'text-lg'
        }
      >
        Manga
      </NavLink>
      <NavLink 
        to="/latest/1" 
        className={({ isActive }) => 
          isActive 
            ? 'text-xl transform scale-125 transition-transform duration-300' 
            : 'text-lg'
        }
      >
        Latest
      </NavLink>
    </nav>
  );
};

export default BottomNavbar;
