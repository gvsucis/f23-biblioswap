import React from 'react';

const ProductCard = ({ listing }) => {
  // Assuming 'listing' has 'title', 'author', 'imageUrl', and 'description' properties
  return (
    <div className="border border-transparent rounded overflow-hidden shadow-lg m-2">
      <img className="w-full h-64 object-cover" src={listing.imageUrl} alt={listing.title} />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{listing.title}</h3>
        <p className="text-white text-base">
          {listing.description}
        </p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-white font-bold">{listing.author}</span> {/* Updated to show author instead of price */}
          <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition-colors">
            Request to Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;


