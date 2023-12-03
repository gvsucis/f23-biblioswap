import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, getAuth } from 'firebase/auth';


const Footer = () => {
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
    <footer class="bg-white shadow dark:bg-gray-900">
        <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div class="sm:flex sm:items-center sm:justify-between">
                <a href="/" class="flex items-center mb-4 sm:mb-0">
                    <img src="/images/icon-swap.png" class="h-8 mr-3" alt="Flowbite Logo" />
                    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Biblioswap</span>
                </a>
                <ul class="flex flex-wrap items-center mb-6 space-x-4 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                    <li>
                    <Link to="/about" className="block py-2 pl-3 pr-2 rounded text-white hover:text-blue-500 transition duration-300">
                        About
                    </Link>
                    </li>
                    <li>
                    {user && (
                    <li>
                        <Link to="/account" className="text-white hover:text-blue-500 transition duration-300">Add to the Library</Link>
                    </li>
                    )}
                    </li>
                    <li>
                    <Link to="/library" className="block py-2 pl-3 pr-2 rounded text-white hover:text-blue-500 transition duration-300">
                        Library
                    </Link>
                    </li>
                    {user && (
                    <li>
                    <Link to="/notifications" className="block py-2 pl-3 pr-2 rounded text-white hover:text-blue-500 transition duration-300">
                        Notifications
                    </Link>
                    </li>
                    )}
                    <li>
                    <Link to="/contactus" className="block py-2 pl-3 pr-2 rounded text-white hover:text-blue-500 transition duration-300">
                        Contact Us
                    </Link>
                    </li>
                </ul>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#0" class="hover:underline">Biblioswap™</a>  All Rights Reserved.</span>
        </div>
    </footer>
  );
};

export default Footer;