import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const About = () => {
  return (

    <div>
      <Navbar />

      {/* Header Section */}
      <div className="bg-gray-900 py-12 mb-6 text-center border border-slate-800 text-white">
        <h1 className="text-4xl font-bold mb-3">A Little Bit About Us.</h1>
        <p className="text-lg max-w-xl mx-auto">
        BiblioSwap is a web application that will allow users to upload their existing library of books they are interested in trading for new books. 
        </p>
      </div>

      <Footer />
    </div>

  );
};

export default About;
