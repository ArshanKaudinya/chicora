import React from 'react';
import Navbar from '../components/navbar';

function Contests() {
  return (
    <div className="min-h-screen font-inter spacing-tight bg-white">
      <Navbar />

      <section className="flex mt-16 flex-col md:flex-row items-center justify-between py-16 px-16">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-5xl font-bold ml-2 text-ddpurple">Chicora. Contests</h1>
          <p className="text-dlpurple text-xl ml-2">
            Contests every day, week, and month.
          </p>
          <button className="bg-mlpurple ml-2 text-black px-6 py-3 rounded-md shadow hover:scale-105 transition-transform">
            Get Started -&gt;
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="w-[400px] h-[300px] bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">Hero Image Placeholder</span>
          </div>
        </div>
      </section>

      <section className="flex mt-40 mb-20">
        <div className="w-1/3 p-8 sticky left-10 top-20 self-start">
          <h2 className="text-5xl font-bold text-ddpurple">By Chicora.</h2>
          <p className="text-2xl text-dlpurple mt-4">
            Winners declared every day. A little <em>chic</em>.
          </p>
        </div>

        <div className="w-[30rem] p-8 space-y-8 ml-[25rem]">
          <div className="bg-mlpurple text-black p-8 rounded-xl shadow">
            <h3 className="text-2xl font-bold">Daily</h3>
            <div className="mt-4 w-full h-48 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">Daily Contest Images</span>
            </div>
          </div>

          <div className="bg-mlpurple text-black p-8 rounded-xl shadow">
            <h3 className="text-2xl font-bold">Weekly</h3>
            <div className="mt-4 w-full h-48 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">Weekly Contest Images</span>
            </div>
          </div>

          <div className="bg-mlpurple text-black p-8 rounded-xl shadow">
            <h3 className="text-2xl font-bold">Monthly</h3>
            <div className="mt-4 w-full h-48 bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-500">Monthly Contest Images</span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-16 pb-16">
        <h2 className="text-5xl font-bold text-ddpurple mb-8">Featured</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="bg-ddpurple text-white rounded-xl w-full md:w-1/2 p-12 flex items-center justify-center text-xl">
            diesel competition
          </div>

          <div className="bg-ddpurple text-white rounded-xl w-full h-[40rem] md:w-1/2 p-12 flex items-center justify-center text-xl">
            zara competition
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contests;

