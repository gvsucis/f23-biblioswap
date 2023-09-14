import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../App.css'; // Import App.css to make sure the styles are applied

const Home = () => {
  return (
    <div>
      <Navbar />
      
      <h1>Welcome to the home page!</h1>
      <p>This is our home page</p>

      <Footer />
    </div>
  );
};

export default Home;
