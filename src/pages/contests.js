import React from 'react';
import Navbar from '../components/navbar';
import { Link } from "react-router-dom";
import dailyContest from "../assets/dailyc.png";
import weeklyContest from "../assets/weeklyc.png";
import monthlyContest from "../assets/monthlyc.png";
import heroImage from "../assets/c24.jpg"; 
import featured1 from "../assets/h2.png"; 
import featured2 from "../assets/h1.png"; 

function Contests() {
  return (
    <div className="min-h-screen font-inter spacing-tight bg-white">
      <Navbar />

      <section className="flex mt-16 flex-col md:flex-row items-center justify-between py-16 px-16">
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-5xl font-bold ml-16 text-ddpurple">Chicora. Contests</h1>
          <p className="text-dlpurple text-xl ml-16">
            Contests every day, week, and month.
          </p>
          <Link to="/submission">
            <button className="mt-4 bg-mlpurple ml-16 text-black px-6 py-3 rounded-md shadow hover:scale-105 transition-transform">
                Get Started
            </button>
          </Link>
        </div>

        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <img src={heroImage} alt="Hero" className="w-[400px] h-[300px] rounded-lg object-cover shadow-md" />
        </div>
      </section>

      <section className="flex mt-40 mb-20">
        <div className="w-1/3 p-16 sticky ml-16 top-20 self-start">
          <h2 className="text-5xl font-bold text-ddpurple">By Chicora.</h2>
          <p className="text-2xl text-dlpurple mt-4">
            Winners declared every day. very <em>chic</em>.
          </p>
        </div>

        <div className="w-[30rem] p-8 space-y-0 ml-[25rem]">
          <h3 className="text-2xl text-ddpurple pt-24 font-bold">Daily</h3>
          <Link to="/submission">
            <div className="bg-white rounded-xl shadow hover:scale-105 transition-transform">
              <img src={dailyContest} alt="Daily Contest" className="mt-4 w-full h-full rounded object-cover shadow-md" />
            </div>
          </Link>

          <h3 className="text-2xl text-ddpurple pt-24 font-bold">Weekly</h3>
          <Link to="/submission">
            <div className="bg-mlpurple rounded-xl shadow hover:scale-105 transition-transform">
              <img src={weeklyContest} alt="Weekly Contest" className="mt-4 w-full h-full rounded object-cover shadow-md" />
            </div>
          </Link>

          <h3 className="text-2xl text-ddpurple pt-24 font-bold">Monthly</h3>
          <Link to="/submission">
            <div className="bg-mlpurple p-rounded-xl shadow hover:scale-105 transition-transform">
              <img src={monthlyContest} alt="Monthly Contest" className="mt-4 w-full h-full rounded object-cover shadow-md" />
            </div>
          </Link>
        </div>
      </section>

      <section className="px-16 ml-16 mr-16 pb-16">
        <h2 className="text-5xl font-bold text-ddpurple mb-8">Featured</h2>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="bg-ddpurple text-white rounded-xl w-full h-[20rem] md:w-1/2 p-0 flex items-center justify-center text-xl">
            <img src={featured1} alt="Diesel Competition" className="w-full h-[10rem] object-cover rounded-xl" />
          </div>

          <div className="bg-ddpurple text-white rounded-xl w-full h-[20rem] md:w-1/2 p-0 flex items-center justify-center text-xl">
            <img src={featured2} alt="Zara Competition" className="w-full h-[10rem] object-cover rounded-xl" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contests;



