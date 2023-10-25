import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';




const Navbar = () => {

  const [showModal, setShowModal] = useState(false); 


  return (
    <nav class="border-gray-200 bg-gray-900">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="http://localhost:3000/" class="flex items-center">
        <img src="/images/icon-swap.png" className="w-16 h-16" alt="Biblioswap Icon" />
            <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">Biblioswap</span>
        </a>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="flex flex-row bg-gray-900 space-x-12 text-lg">
            <li class="pt-2">
            <Link to="/about" className="text-white hover:text-blue-600">
            About
            </Link>
            </li>
            <li class="pt-2">
            <Link to="/account" className="text-white hover:text-blue-600">
            Account
            </Link>
            </li>
            <li class="pt-2">
            <Link to="/library" className="text-white hover:text-blue-600">
            Library
            </Link>
            </li>
            <li class="pt-2">
            <Link to="/messages" className="text-white hover:text-blue-600">
            Messages
            </Link>
            </li>
            <li>
            <button onClick={() => setShowModal(true)} className="bg-blue-700  px-5 py-2 rounded text-white md:hover:text-blue-200">
              Login
            </button>
            </li>
          </ul>
        </div>
      </div>
      <Login show={showModal} onClose={() => setShowModal(false)} />
    </nav>
  );
};

export default Navbar;
