import React from 'react';
import Navbar from '../components/navbar';
import mannequins from '../assets/mannequins.jpg';

function Home() {
  return (
    <div>
        <Navbar />
        <section className="flex flex-col items-center justify-center px-8 py-16 md:flex-row md:justify-around bg-white">
        {/* Left: Image */}
        <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center">
            <img
            src={mannequins}
            alt="Mannequins"
            className="rounded-xl shadow-md max-w-full h-auto"
            />
        </div>

        {/* Right: Text Content */}
        <div className="md:w-1/2 max-w-lg text-center md:text-left">
            {/* Title with Star */}
            <h1 className="text-4xl font-bold text-purple-700 mb-4 flex items-center justify-center md:justify-start">
            <span className="mr-2 text-3xl" aria-hidden="true">★</span>
            Create Outfits
            </h1>

            <p className="text-gray-600 mb-6">
            Use our extensive catalogue and let the <em>chic</em> flow.
            </p>

            {/* Buttons */}
            <div className="space-x-3">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md shadow hover:bg-pink-600 transition">
                Get Started
            </button>
            <button className="bg-white text-pink-500 border border-pink-500 px-4 py-2 rounded-md shadow hover:bg-pink-100 transition">
                Learn More
            </button>
            </div>
        </div>
        </section>
    </div>
  );
}

export default Home;
