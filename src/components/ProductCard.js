import React, { useState } from 'react';
import { db } from '../firebase'; // make sure this is the correct path to your firebase config
import { deleteDoc, doc } from 'firebase/firestore';

const ProductCard = ({ listing, currentUserId }) => {
  const [showOwnerInfo, setShowOwnerInfo] = useState(false);

  // Function to delete the listing
  const handleDelete = async () => {
    // Confirm with the user before deletion
    if (window.confirm("Are you sure you want to delete this listing?")) {
      try {
        await deleteDoc(doc(db, 'listings', listing.id));
        console.log('Listing deleted successfully');
        // Optionally, refresh the listings on the page or navigate the user away
      } catch (error) {
        console.error('Error deleting listing: ', error);
      }
    }
  };

  return (
    <div className="flex flex-col border border-transparent rounded overflow-hidden shadow-lg m-2">
      <img 
        className="w-full object-cover" 
        style={{ maxHeight: '250px', objectFit: 'cover' }} 
        src={listing.imageUrl} 
        alt={listing.title} 
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-lg text-white mb-2">{listing.title}</h3>
        <p className="text-white text-xs flex-grow">{listing.description}</p>
        
        <span className="text-white text-center font-bold mb-2">Author: <p class="">{listing.author}</p></span>

        {/* View Owner Button */}
        <button
          onClick={() => setShowOwnerInfo(!showOwnerInfo)}
          className="px-4 py-2 rounded bg-blue-700 hover:bg-blue-500 transition duration-300 text-white self-center mb-2"
        >
          View Owner
        </button>

        {/* Owner contact email and Delete Button */}
        {showOwnerInfo && (
          <div className="flex space-between gap-2 m-4">
            <p className="text-white">Contact Email: {listing.contactEmail}</p>
            <button
                onClick={handleDelete}
                className="px-4 py-2 mt-2 rounded bg-red-500 text-white hover:bg-red-700 transition-colors self-center"
              >
                Delete
        </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;

