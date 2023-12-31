import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


const Notifications = () => {
  return (

    <div className="flex flex-col min-h-screen bg-slate-800"> {/* Flex container with minimum height */}
      <Navbar />
      <div className="flex-grow">
      {/* Header Section */}
      <div className="bg-gray-900 py-12 mb-6 text-center border border-slate-800 text-white">
        <h1 className="text-4xl font-bold mb-3">View Your Notifications</h1>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 rounded-md p-4 m-4">
          <h2 className="text-2xl font-semibold mb-3">Pending Swaps</h2>
          <p className="mb-4">Check who is requesting a book of yours!</p>
          {/* List of pending swaps could go here */}
          <div className="space-y-2">
            {/* Example of a pending swap item */}
            <div className="flex justify-between items-center p-3 border border-gray-300 rounded-md">
              <span>Swap Item 1</span>
            </div>
            <div className="flex justify-between items-center p-3 border border-gray-300 rounded-md">
              <span>Swap Item 2</span>
            </div>
            <div className="flex justify-between items-center p-3 border border-gray-300 rounded-md">
              <span>Swap Item 3</span>
            </div>
            <div className="flex justify-between items-center p-3 border border-gray-300 rounded-md">
              <span>Swap Item 4</span>
            </div>
            <div className="flex justify-between items-center p-3 border border-gray-300 rounded-md">
              <span>Swap Item 5</span>
            </div>
            <div className="flex justify-between items-center p-3 border border-gray-300 rounded-md">
              <span>Swap Item 6</span>
            </div>
            <div className="flex justify-between items-center p-3 border border-gray-300 rounded-md">
              <span>Swap Item 7</span>
            </div>
            <div className="flex justify-between items-center p-3 border border-gray-300 rounded-md">
              <span>Swap Item 8</span>
            </div>
            <div className="flex justify-between items-center p-3 border border-gray-300 rounded-md">
              <span>Swap Item 9</span>
            </div>
            <div className="flex justify-between items-center p-3 border border-gray-300 rounded-md">
              <span>Swap Item 10</span>
            </div>
          </div>
      </div>
      </div>




      <Footer />
    </div>
</div>
  );
};

export default Notifications;
