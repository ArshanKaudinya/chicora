import React from 'react';
import Navbar from '../components/navbar';

function Leaderboard() {
  return (
    <div className="min-h-screen font-inter spacing-tight bg-white">
      <Navbar />

      <h1 className="text-center text-5xl font-bold text-ddpurple mt-20">
        Leaderboard
      </h1>

      <h2 className="text-center text-xl text-dlpurple mt-2">the <span className='italic'>chicest.</span></h2>

      <div className="w-full max-w-xl mx-auto mt-16">
        <table className="w-full table-auto border-separate border-spacing-y-2">
            <tbody>
            
            <tr className="bg-lb1 text-black rounded-lg overflow-hidden">
                <td className="px-4 py-4 text-center font-bold rounded-l-lg">★ 1</td>
                <td className="px-4 py-2">Brent Faiyaz</td>
                <td className="px-4 py-2 text-right rounded-r-lg">253,938 likes</td>
            </tr>

            <tr className="bg-lb1 text-black rounded-lg overflow-hidden">
                <td className="px-4 py-4 text-center font-bold rounded-l-lg">2</td>
                <td className="px-4 py-2">P A R T Y N E X T D O O R</td>
                <td className="px-4 py-2 text-right rounded-r-lg">183,345 likes</td>
            </tr>

            <tr className="bg-lb2 text-black rounded-lg overflow-hidden">
                <td className="px-4 py-4 text-center font-bold rounded-l-lg">3</td>
                <td className="px-4 py-2">Nusrat Fateh Ali Khan</td>
                <td className="px-4 py-2 text-right rounded-r-lg">145,856 likes</td>
            </tr>

            <tr className="bg-lb2 text-black rounded-lg overflow-hidden">
                <td className="px-4 py-4 text-center font-bold rounded-l-lg">4</td>
                <td className="px-4 py-2">the WeekDay</td>
                <td className="px-4 py-2 text-right rounded-r-lg">121,253 likes</td>
            </tr>

            <tr className="bg-lb3 text-black rounded-lg overflow-hidden">
                <td className="px-4 py-4 text-center font-bold rounded-l-lg">5</td>
                <td className="px-4 py-2">Drake</td>
                <td className="px-4 py-2 text-right rounded-r-lg">107,436 likes</td>
            </tr>
            <tr className="bg-lb3 text-black rounded-lg overflow-hidden">
                <td className="px-4 py-4 text-center font-bold rounded-l-lg">6</td>
                <td className="px-4 py-2">Ethan Carter</td>
                <td className="px-4 py-2 text-right rounded-r-lg">103,433 likes</td>
            </tr>
                
                <tr className="bg-lb4 text-black rounded-lg overflow-hidden">
                <td className="px-4 py-4 text-center font-bold rounded-l-lg">7</td>
                <td className="px-4 py-2">Oliver Bennett</td>
                <td className="px-4 py-2 text-right rounded-r-lg">98,312 likes</td>
            </tr>
                
                <tr className="bg-lb4 text-black rounded-lg overflow-hidden">
                <td className="px-4 py-4 text-center font-bold rounded-l-lg">8</td>
                <td className="px-4 py-2">Benjamin Harrison</td>
                <td className="px-4 py-2 text-right rounded-r-lg">92,765 likes</td>
            </tr>


            <tr className="bg-lb5 text-black rounded-lg overflow-hidden">
                <td className="px-4 py-4 text-center font-bold rounded-l-lg">9</td>
                <td className="px-4 py-2">James Whitmore</td>
                <td className="px-4 py-2 text-right rounded-r-lg">85,453 likes</td>
            </tr>
            <tr className="bg-lb5 text-black rounded-lg overflow-hidden">
                <td className="px-4 py-4 text-center font-bold rounded-l-lg">10</td>
                <td className="px-4 py-2">Nathaniel Brooks</td>
                <td className="px-4 py-2 text-right rounded-r-lg">83,493 likes</td>
            </tr>
                
            <tr className="bg-lb6 text-black rounded-lg overflow-hidden">
                <td className="px-4 py-4 text-center font-bold rounded-l-lg">192,325</td>
                <td className="px-4 py-2">You</td>
                <td className="px-4 py-2 text-right rounded-r-lg">6 likes</td>
            </tr>
           </tbody>
        </table>

        <h2 className="text-center text-l text-dlpurple mt-2">load more...</h2>
        </div>



    </div>
  );
}

export default Leaderboard;
