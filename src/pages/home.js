// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar';
import mannequins from '../assets/mannequins.jpg';
import shopping from '../assets/shopping.jpg';

function Home() {
  return (
    <div>
      <Navbar />

      <section className="flex flex-col items-center justify-center px-8 py-16 md:flex-row md:justify-around bg-white">
        <div className="mb-8 md:mb-0 md:w-1/2 flex justify-center">
          <img
            src={mannequins}
            alt="Mannequins"
            className="rounded-xl shadow-md w-[33rem] h-[23rem] object-cover"
          />
        </div>

        <div className="md:w-1/2 max-w-lg text-center md:text-left">
          <h1 className="text-5xl font-bold text-ddpurple mb-4 flex items-center justify-center md:justify-start">
            <span className="mr-2 text-3xl" aria-hidden="true">
              ★
            </span>
            Create Outfits
          </h1>
          <p className="text-dlpurple text-xl mb-6">
            Use our extensive catalogue and let the <em>chic</em> flow.
          </p>

          <div className="space-x-3">
            <Link
              to=""
              className="bg-mlpurple text-black px-4 py-2 rounded-md transition-transform duration-200 shadow hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to=""
              className="bg-llpurple text-black px-4 py-2 rounded-md transition-transform duration-200 hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center px-12 py-16 md:flex-row md:justify-around bg-white">
        <div className="md:w-1/2 max-w-lg text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-5xl font-bold text-ddpurple mb-4 flex items-center justify-center md:justify-start">
            <span className="mr-2 text-3xl" aria-hidden="true">
              ★
            </span>
            Get Discounts
          </h1>
          <p className="text-dlpurple text-xl mb-6">
            Browse dozens of templates. Click, duplicate, customize.
          </p>

          <div className="space-x-3">
            <Link
              to=""
              className="bg-mlpurple text-black px-4 py-2 rounded-md transition-transform duration-200 shadow hover:scale-105"
            >
              Get Started
            </Link>
            <Link
              to=""
              className="bg-llpurple text-black px-4 py-2 rounded-md transition-transform duration-200 hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={shopping}
            alt="Shopping Bags"
            className="rounded-xl shadow-md w-[33rem] h-[23rem] object-cover"
          />
        </div>
      </section>
    </div>
  );
}

export default Home;

