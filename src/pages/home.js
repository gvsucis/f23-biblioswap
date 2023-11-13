import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../App.css';

const Home = () => {
  return (
    <div class="bg-slate-800">
      <Navbar />

    <div class="container mx-auto px-4 bg-slate-800 pl-20">
        <div class="flex flex-wrap mx-4">
            <div class="w-full md:w-1/2 px-4 mt-12">
                <div class="p-6">
                    <h1 class="text-3xl font-semibold mb-4 text-white">Need a new book?</h1>
                    <p class="text-lg text-white">Browse other people's libraries at little to no cost to you!</p>
                    <button class="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">Browse Libraries</button>
                </div>
            </div>
            <div class="w-full md:w-1/2 px-4 pl-20 mb-10">
                <div class="p-6">
                    <img src="..\images\swap.png" alt="Book Image" class="rounded-lg shadow-xl"></img>
                </div>
            </div>
            <div class="container mx-auto p-4">
              <h2 class="text-2xl font-semibold mb-6 pl-6 text-white">Browse your Favorite Genres</h2>
              <div class="flex justify-around w-9/12 pl-20">

                  <div class="flex flex-col items-center mb-20">
                      <button class="border text-white font-bold py-2 px-4 rounded">Sci-Fi</button>
                  </div>


                  <div class="flex flex-col items-center">
                      <button class="border bg-gray-800 text-white font-bold py-2 px-4 rounded">Fiction</button>
                  </div>


                  <div class="flex flex-col items-center">
                      <button class="border bg-gray-800 text-white font-bold py-2 px-4 rounded">Non-Fiction</button>
                  </div>


                  <div class="flex flex-col items-center">
                      <button class="border bg-gray-800 text-white font-bold py-2 px-4 rounded">Mystery</button>
                  </div>

                  <div class="flex flex-col items-center">
                      <button class="border bg-gray-800 text-white font-bold py-2 px-4 rounded">Poetry</button>
                  </div>

              </div>
              
              <div class="container flex mx-auto p-4 gap-3">
                <a href="#" class="flex flex-col items-center bg-gray-800 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-10">
                <div class="flex flex-col justify-between p-4 leading-normal">
                        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Competitors Cost(s)</h5>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                    </div>
                </a>
                <a href="#" class="flex flex-col items-center bg-gray-800 border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-10">
                  <div class="flex flex-col justify-between p-4 leading-normal">
                          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Our Costs(s)</h5>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>

                  </div>
                </a>
              </div>
          </div>
        </div>
    </div>
    <Footer />
  </div>
  );
};

export default Home;
