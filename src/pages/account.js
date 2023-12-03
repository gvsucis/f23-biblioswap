import React, { useState, useEffect } from 'react';
import { auth } from '../firebase'; // Make sure this path is correct
import { onAuthStateChanged } from 'firebase/auth';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import CreateListing from '../components/CreateListing';

const Account = () => {
  const [user, setUser] = useState(null); // State to store the authenticated user

  // Subscribe to the user's authentication state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean up the subscription on unmount
    return unsubscribe;
  }, []);

  return (
    <div className="bg-slate-800 text-white">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-gray-900 py-12 text-center border border-slate-800 text-white">
        <h1 className="text-4xl font-bold mb-3 mt-10">Create New Listing</h1>
        {user ? (
          <p className="text-xl font-bold mb-3 mt-10">Create a new listing for the books you'd like to swap with others.</p>
        ) : (
          <p className="text-xl font-bold mb-3 mt-10">Please log in to create a listing.</p>
        )}
      </div>

      {/* Always render the CreateListing form if the user is logged in */}
      {user && <CreateListing />}
      
      <Footer />
    </div>
  );
};

export default Account;
