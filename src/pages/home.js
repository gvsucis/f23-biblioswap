import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
  return (
    <div class="bg-slate-800">
      <Navbar />

    <div class="container mx-auto px-4 bg-slate-800 w-screen">
        <div class="flex flex-wrap mx-4 mr-2">
          <div  class="flex flex-wrap">
              <div class="w-1/2 px-4 mt-12">
                  <div class="p-6">
                      <h1 class="text-3xl font-semibold mb-4 text-white">Need a new book?</h1>
                      <p class="text-lg text-white mb-2">Enjoy the benefits of swapping books with another person to save money! Browse other people's libraries and communicate a swap for little to no cost to you!</p>
                      <Link to="/library" className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 inline-block no-underline">
                        Browse Libraries
                      </Link>
                  </div>
              </div>
              <div class="pl-60">
                  <div class="pt-12">
                      <img src="..\images\swap.png" alt="Book Image" class="w-64 h-auto rounded-lg shadow-xl"></img>
                  </div>
              </div>
            </div>
            <div class="container mx-auto p-4 pt-10">
              <h2 class="text-2xl font-semibold mb-6 pl-6 text-white">Browse your Favorite Genres</h2>
              <div class="flex justify-around w-9/12 pl-10 pt-2">
                  <div class="flex flex-col items-center mb-20">
                      <button class="border text-white font-bold py-2 px-4 rounded">Sci-Fi</button>
                  </div>
                  <div class="flex flex-col items-center">
                      <button class="border bg-slate-800 text-white font-bold py-2 px-4 rounded">Fiction</button>
                  </div>
                  <div class="flex flex-col items-center">
                      <button class="border bg-slate-800 text-white font-bold py-2 px-4 rounded">Non-Fiction</button>
                  </div>
                  <div class="flex flex-col items-center">
                      <button class="border bg-slate-800 text-white font-bold py-2 px-4 rounded">Mystery</button>
                  </div>
                  <div class="flex flex-col items-center">
                      <button class="border bg-slate-800 text-white font-bold py-2 px-4 rounded">Poetry</button>
                  </div>
              </div>
              
              <div class="container mx-auto p-6 flex flex-wrap md:justify-between justify-start">
                <div class="flex flex-col items-center bg-gray-900 border border-gray-200 rounded-lg shadow max-w-xl mb-4 md:mb-0 p-10">
                <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-3xl font-bold tracking-tight text-white pb-6">Competitors Cost(s)</h5>
                          <ul class="list-disc pl-5 text-gray-100 text-xl">
                            <li class="pb-2">High Purchase Prices for new or bestselling books</li>
                            <li class="pb-2">Additional Shipping Fees when ordering online</li>
                            <li class="pb-2">Limited Access to new titles due to cost constraints</li>
                            <li class="pb-2">Depreciation of Physical Books over time</li>
                            <li class="pb-2">Environmental Impact from production and shipping</li>
                          </ul>
                    </div>
                </div>
                <div class="flex flex-col items-center bg-gray-900 border border-gray-200 rounded-lg shadow max-w-xl mb-4 md:mb-0 p-10">
                  <div class="flex flex-col justify-between p-4 leading-normal">
                          <h5 class="mb-2 text-3xl font-bold tracking-tight text-white pb-6">Our Costs(s)</h5>
                          <ul class="list-disc pl-5 text-gray-100 text-xl">
                            <li class="pb-2">Low to No-Cost Book Swapping</li>
                            <li class="pb-2">Access to a Diverse Library of genres and titles</li>
                            <li class="pb-2">Community Engagement with fellow book lovers</li>
                            <li class="pb-2">Sustainable Reading by reducing new book production</li>
                            <li class="pb-2">No Depreciation Worries in a sharing economy</li>
                          </ul>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
    <Footer />
  </div>
  );
};

export default Home;
