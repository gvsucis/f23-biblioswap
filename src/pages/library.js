import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Adjust the path if necessary
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ProductCard from '../components/ProductCard';

const Library = () => {
  const [listings, setListings] = useState([]); // state to store listings

  useEffect(() => {
    // Function to fetch listings
    const fetchListings = async () => {
      const listingsCollection = []; // This will hold our listings
      try {
        // Fetching documents from the 'listings' collection
        const querySnapshot = await getDocs(collection(db, 'listings'));
        querySnapshot.forEach((doc) => {
          listingsCollection.push({ id: doc.id, ...doc.data() });
        });
        setListings(listingsCollection); // Set listings in state
      } catch (error) {
        console.error("Error fetching listings: ", error);
        // Handle the error appropriately
      }
    };

    fetchListings(); // Call the function to fetch listings
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className="bg-slate-800">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-gray-900 py-12 mb-6 text-center border border-slate-800 text-white">
        <h1 className="text-4xl font-bold mb-3">Explore Our Collection</h1>
        <p className="text-lg max-w-xl mx-auto pt-2">
          Dive into our curated library of books, find your next great read, and explore new literary worlds.
        </p>
        <p className="text-lg max-w-xl mx-auto pt-10">
          Get started by creating an account to add a book.
        </p>
      </div>
      
      {/* Grid container for product cards */}
      <div className="container mx-auto px-4 pb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {listings.map((listing) => (
          <ProductCard key={listing.id} listing={listing} />
        ))}
      </div>
      </div>

      <Footer />
    </div>
  );
};

export default Library;



