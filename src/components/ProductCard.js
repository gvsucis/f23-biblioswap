import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded overflow-hidden shadow-lg m-2">
      <img className="w-full h-64 object-cover" src={product.imageUrl} alt={product.name} />
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-700 text-base">
          {product.description}
        </p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-gray-900 font-bold">{product.price}</span>
          <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition-colors">
            Request to Swap
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
