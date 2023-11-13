import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import ProductCard from '../components/ProductCard';

// Dummy data for the example
const products = [
  {
    id: 1,
    title: 'Product One',
    description: 'This is the description for product one.',
    price: '$29.99',
    imageUrl: 'https://via.placeholder.com/200x150'
  },
  {
    id: 2,
    title: 'Product Two',
    description: 'This is the description for product two.',
    price: '$19.99',
    imageUrl: 'https://via.placeholder.com/200x150'
  },
  {
    id: 3,
    title: 'Product Three',
    description: 'This is the description for product three.',
    price: '$39.99',
    imageUrl: 'https://via.placeholder.com/200x150'
  },
  {
    id: 4,
    title: 'Product Four',
    description: 'This is the description for product four.',
    price: '$49.99',
    imageUrl: 'https://via.placeholder.com/200x150'
  },
  {
    id: 5,
    title: 'Product One',
    description: 'This is the description for product one.',
    price: '$29.99',
    imageUrl: 'https://via.placeholder.com/200x150'
  },
  {
    id: 6,
    title: 'Product Two',
    description: 'This is the description for product two.',
    price: '$19.99',
    imageUrl: 'https://via.placeholder.com/200x150'
  },
  {
    id: 7,
    title: 'Product Three',
    description: 'This is the description for product three.',
    price: '$39.99',
    imageUrl: 'https://via.placeholder.com/200x150'
  },
  {
    id: 8,
    title: 'Product Four',
    description: 'This is the description for product four.',
    price: '$49.99',
    imageUrl: 'https://via.placeholder.com/200x150'
  }
];

const Library = () => {
  return (
    <div class="bg-slate-800">
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-gray-900 py-12 mb-6 text-center border border-slate-800 text-white">
        <h1 className="text-4xl font-bold mb-3">Explore Our Collection</h1>
        <p className="text-lg max-w-xl mx-auto">
          Dive into our curated library of books, find your next great read, and explore new literary worlds.
        </p>
      </div>
      
      {/* Grid container for product cards */}
      <div className="container mx-auto px-4 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Library;


