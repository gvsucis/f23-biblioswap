import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../App.css';

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* TODO: insert generic container with content here*/}
      <h1>Welcome to the home page!</h1>
      <p>This is our home page</p>

      <Footer />
    </div>
  );
};

export default Home;
