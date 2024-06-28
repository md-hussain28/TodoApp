import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  console.log("Navbar Rendered");

  return (
    <div className="w-full fixed sm:top-0 my-4 bottom-0 sm:bottom-auto">
      <nav className="bg-gray-800 p-4 sm:w-3/5 w-4/5 mx-auto rounded-xl border-2 border-cyan-700">
        <ul className="flex justify-around">
          <li>
            <Link to="/" className={`text-white ${location.pathname === '/' ? 'font-bold border-b-2 border-cyan-500' : ''}`}>Home</Link>
          </li>
          <li>
            <Link to="/todo" className={`text-white ${location.pathname === '/todo' ? 'font-bold border-b-2 border-cyan-500' : ''}`}>Todo</Link>
          </li>
          <li>
            <Link to="/done" className={`text-white ${location.pathname === '/done' ? 'font-bold border-b-2 border-cyan-500' : ''}`}>Done</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
