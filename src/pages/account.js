import React, { useEffect, useState } from 'react';
import { auth, db } from "../firebaseConfig";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Navbar from '../components/navbar'; 
import coinIcon from '../assets/chicoin.png';
import userImage from '../assets/pfp.png';
import h1 from '../assets/h1.png';
import h2 from '../assets/h2.png';  
import h3 from '../assets/h3.png';  
import h4 from '../assets/h4.png';  

function Account() {
  const [user, setUser] = useState(null);
  const [coins, setCoins] = useState(0);
  const [username, setUsername] = useState("Guest");
  const [name, setName] = useState("Guest User");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);

        // Fetch user data from Firestore
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const userData = userSnap.data();
          setCoins(userData.coins || 0);
          setUsername(userData.username || "guest");
          setName(userData.name || "Guest User");
        }
      } else {
        setUser(null);
        setCoins(0);
        setUsername("Guest");
        setName("Guest User");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login"); // Redirect to login page after logout
  };

  return (
    <div className="min-h-screen font-inter spacing-tight bg-mlpurple relative">
      <Navbar />
      <div className="relative flex flex-col items-center pt-16 pb-16">

        <div className="absolute top-8 left-8 flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow">
          <img src={coinIcon} alt="Coin" className="w-9 h-7" />
          <span className="text-ddpurple font-bold">{coins}</span>
        </div>

        <div className="absolute top-8 right-8 text-ddpurple font-bold">
          @{username}
        </div>

        <div className="w-48 h-48 rounded-full bg-gray-200 mt-14 flex items-center justify-center">
              <img src={userImage} alt="Profile" className="w-full h-full object-cover rounded-full" />
        </div>

        <h2 className="text-3xl font-bold mt-4 text-ddpurple">{name}</h2>
        <p className="text-dlpurple text-lg mt-1">you're the man</p>

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

        {/* Logout/Sign-in Button */}
        <button 
            onClick={handleLogout} 
            className={`absolute bottom-8 right-8 px-6 py-3 rounded-xl shadow-lg font-bold text-white transition-all
                ${user ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"} hover:scale-105`}
            >
            {user ? "Logout" : "Sign In"}
        </button>



      </div>
    </div>
  );
}

export default Account;


