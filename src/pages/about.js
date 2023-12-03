import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen bg-slate-800"> {/* Flex container with minimum height */}
      <Navbar />

      <div className="flex-grow"> {/* Content grows to fill available space */}
        {/* Header Section */}
        <div className="bg-gray-900 py-12 text-center border border-slate-800 text-white">
          <h1 className="text-4xl font-bold mb-6">A Little Bit About Us.</h1>
        </div>

        <img src="/images/eco-friendly.png" alt="Eco-Friendly" className="w-[300px] h-[200px] mx-auto" />

        <div className="w-full flex justify-center bg-slate-800 py-12 text-center text-white">
          <p className="w-1/2 text-xl mt-6">
            BiblioSwap is more than just a student startup project; it's a vision for a sustainable, economical, and community-driven approach to reading. Born out of our own experiences as students seeking cost-effective solutions for accessing books, we realized the power of a shared economy in the realm of literature. Our goal is to revolutionize how people access books by leveraging technology to create a web application where users can easily upload their existing library, showcasing books they own and are willing to trade. This platform isn't just for exchanging books; it's about building a community of readers and learners who value sustainability, sharing, and the joy of discovering new literature. Whether you're in search of textbooks, literature for leisure, or rare finds, BiblioSwap aims to connect you with fellow book enthusiasts, making reading more accessible and environmentally friendly. Join us in redefining the way we think about book ownership and community-based learning.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
