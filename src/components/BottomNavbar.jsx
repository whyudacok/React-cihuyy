import React from 'react';
import { NavLink } from 'react-router-dom';

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-30 bg-black bg-opacity-80 backdrop-blur-md h-[60px] flex justify-around items-center px-4 shadow-lg">
      <NavLink
        to="/anime"
        className={({ isActive }) =>
          `text-white flex flex-col items-center transition-transform duration-300 ${
            isActive ? 'translate-y-[-4px] text-blue-500' : 'hover:translate-y-[-2px]'
          }`
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 20l9-8-9-8-9 8 9 8zm0 0v-8m0 8l6.6-5.93m-13.2 0L12 12"
          />
        </svg>
        <span className="text-xs">Anime</span>
      </NavLink>

      <NavLink
        to="/manga"
        className={({ isActive }) =>
          `text-white flex flex-col items-center transition-transform duration-300 ${
            isActive ? 'translate-y-[-4px] text-blue-500' : 'hover:translate-y-[-2px]'
          }`
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4.5V19m7.55-3.45L4.45 5.95M12 12.5L4.45 18.55m14.1-14.1L12 12.5"
          />
        </svg>
        <span className="text-xs">Manga</span>
      </NavLink>

      <NavLink
        to="/user"
        className={({ isActive }) =>
          `text-white flex flex-col items-center transition-transform duration-300 ${
            isActive ? 'translate-y-[-4px] text-blue-500' : 'hover:translate-y-[-2px]'
          }`
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1h16v-1c0-2.66-5.33-4-8-4z"
          />
        </svg>
        <span className="text-xs">User</span>
      </NavLink>
    </nav>
  );
};

export default BottomNavbar;
