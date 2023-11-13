import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';


const Account = () => {
  return (

    <div>
      <Navbar />
      
      {/* Header Section */}
      <div className="bg-gray-900 py-12 mb-6 text-center border border-slate-800 text-white">
        <h1 className="text-4xl font-bold mb-3">Your Account Details</h1>
      </div>

      <Footer />
    </div>

  );
};

export default Account;
