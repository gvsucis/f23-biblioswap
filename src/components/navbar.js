import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import Login from './Login';

const Navbar = () => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useState(null); // This state holds the user data if logged in

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set user data on login
    });

    // Clean up subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 bg-gray-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <img src="/images/icon-swap.png" className="w-16 h-16" alt="Biblioswap Icon" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">Biblioswap</span>
        </Link>
        <div className="flex md:order-2">
          {user ? (
            <button onClick={() => getAuth().signOut()} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">
              Logout
            </button>
          ) : (
            <button onClick={() => setShowModal(true)} className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0">
              Login
            </button>
          )}
        </div>
        <div className="hidden w-full md:block md:w-auto">
          <ul className="flex flex-col p-4 mt-4 bg-gray-900 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <Link to="/library" className="text-white hover:text-blue-600">Library</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-blue-600">About</Link>
            </li>
            <li>
              <Link to="/account" className="text-white hover:text-blue-600">Account</Link>
            </li>
            <li>
              <Link to="/notifications" className="text-white hover:text-blue-600">Notifications</Link>
            </li>
            {user && (
              <li className="md:ml-4 pl-80 text-white">
                Welcome, {user.email}!
              </li>
            )}
          </ul>
        </div>
      </div>
      <Login show={showModal} onClose={() => setShowModal(false)} />
    </nav>
  );
};

export default Navbar;

