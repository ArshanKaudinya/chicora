import React from 'react';
import Navbar from '../components/navbar'; 
import coinIcon from '../assets/chicoin.png';
import userImage from '../assets/pfp.png';


import h1 from '../assets/h1.png';
import h2 from '../assets/h2.png';  
import h3 from '../assets/h3.png';  
import h4 from '../assets/h4.png';  


function Account() {
  return (
    <div className="min-h-screen font-inter spacing-tight bg-mlpurple relative">
      <Navbar />
      <div className="relative flex flex-col items-center pt-16 pb-16">

        <div className="absolute top-8 left-8 flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow">
          <img src={coinIcon} alt="Coin" className="w-9 h-7" />
          <span className="text-ddpurple font-bold">2197</span>
        </div>

        <div className="absolute top-8 right-8 text-ddpurple font-bold">
          @a$aprocky
        </div>

        <div className="w-48 h-48 rounded-full bg-gray-200 mt-14 flex items-center justify-center">
              <img src={userImage} alt="Profile" className="w-full h-full object-cover rounded-full" />
        </div>

        <h2 className="text-3xl font-bold mt-4 text-ddpurple">A$AP Rocky</h2>
        <p className="text-dlpurple text-lg mt-1">team wai wai (green gang)</p>

        <div className="mt-12 w-full pl-[15%]">
          <h3 className="text-2xl font-bold text-ddpurple mb-4">Highlights</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="bg-llpurple w-full sm:w-64 h-[28rem] rounded-lg shadow flex items-center justify-center">
              <img src = {h1} className='w-full h-full object-cover'/>
            </div>
            <div className="bg-llpurple w-full sm:w-64 h-[28rem] rounded-lg shadow flex items-center justify-center">
              <img src = {h2} className='w-full h-full object-fit'/>
            </div>
            <div className="bg-llpurple w-full sm:w-64 h-[28rem] rounded-lg shadow flex items-center justify-center">
                <img src = {h3} className='w-full h-full object-fit'/>
            </div>
            <div className="bg-llpurple w-full sm:w-64 h-[28rem] rounded-lg shadow flex items-center justify-center">
                <img src = {h4} className='w-full h-full object-fit'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
