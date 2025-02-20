import React, { useState, useEffect } from "react";
import { auth, db } from "../firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import Navbar from "../components/navbar";
import mannequin from "../assets/subman.jpg";

// Glasses Variations
import glasses1 from "../assets/store/glasses1.png";
import glasses2 from "../assets/store/glasses2.png";
import glasses3 from "../assets/store/glasses3.png";

// Pants
import pant1 from "../assets/store/pant1.png";
import pant2 from "../assets/store/pant2.png";
import pant3 from "../assets/store/pant3.png";

// Shoes
import shoe1 from "../assets/store/shoe1.png";
import shoe2 from "../assets/store/shoe2.png";
import shoe3 from "../assets/store/shoe3.png";

// Tops
import top1 from "../assets/store/top1.png";
import top2 from "../assets/store/top2.png";
import top3 from "../assets/store/top3.png";

// Hoodie from contest folder
import hoodie1 from "../assets/contest/hoodie1.png";

const Submission = () => {
    const clothingItems = [
        { id: "glasses1", image: glasses1 },
        { id: "glasses2", image: glasses2 },
        { id: "glasses3", image: glasses3 },
        
        { id: "pant1", image: pant1 },
        { id: "pant2", image: pant2 },
        { id: "pant3", image: pant3 },
        
        { id: "shoe1", image: shoe1 },
        { id: "shoe2", image: shoe2 },
        { id: "shoe3", image: shoe3 },
        
        { id: "top1", image: top1 },
        { id: "top2", image: top2 },
        { id: "top3", image: top3 },
      
        { id: "hoodie1", image: hoodie1 },
      ];

  const [outfit, setOutfit] = useState({
    head: null,
    top: null,
    pants: null,
    bottom: null,
  });

  const [user, setUser] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      if (auth.currentUser) {
        setUser(auth.currentUser);
      }
    };
    fetchUser();
  }, []);

  const handleDragStart = (item) => (event) => {
    event.dataTransfer.setData("clothingId", item.id);
  };

  const handleDrop = (area) => (event) => {
    event.preventDefault();
    const clothingId = event.dataTransfer.getData("clothingId");
    const droppedItem = clothingItems.find((item) => item.id === clothingId);
    if (droppedItem) {
      setOutfit((prev) => ({ ...prev, [area]: droppedItem }));
    }
  };

  const handleRemove = (area) => () => {
    setOutfit((prev) => ({ ...prev, [area]: null }));
  };

  const handleSubmit = async () => {
    setOutfit({
      head: null,
      top: null,
      pants: null,
      bottom: null,
    });

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);

    if (user) {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        const currentCoins = userSnap.data().coins || 0;
        await updateDoc(userRef, { coins: currentCoins + 2 });
      }
    }
  };

  return (
    <div className="font-inter min-h-screen bg-white relative">
      <Navbar />

      {/* Submission Confirmation Popup - Top Right */}
      {showPopup && (
        <div className="absolute top-24 right-4 bg-green-500 text-white px-6 py-3 rounded-lg opacity-90 shadow-md transition-all">
          ✅ Submitted!, you earned 2 ChiCoins
        </div>
      )}

      <div className="px-[25%] py-4 text-left font-inter text-[1rem] text-dlpurple">
        <p>★ Drag and drop clothing items onto the mannequin to create your outfit.</p>
        <p>★ Click on an item to remove it. The mannequin only holds one item per section.</p>
      </div>

      <div className="flex flex-row items-start justify-center p-6 space-x-12">
        {/* Mannequin */}
        <div className="bg-white p-6 rounded-lg flex flex-col items-center relative w-[450px] h-[550px]">
          <img src={mannequin} alt="Mannequin" className="h-full object-cover rounded-lg opacity-80" />

          <div className="absolute top-20 w-24 h-12 flex justify-center items-center"
            onDrop={handleDrop("head")} onDragOver={(e) => e.preventDefault()}>
            {outfit.head && (
              <img src={outfit.head.image} alt="Head" className="w-24 h-12 cursor-pointer"
                onClick={handleRemove("head")} />
            )}
          </div>

          <div className="absolute top-40 w-44 h-44 flex justify-center items-center z-20"
            onDrop={handleDrop("top")} onDragOver={(e) => e.preventDefault()}>
            {outfit.top && (
              <img src={outfit.top.image} alt="Top" className="w-44 h-44 cursor-pointer"
                onClick={handleRemove("top")} />
            )}
          </div>

          <div className="absolute bottom-16 w-36 h-44 flex justify-center items-center z-10"
            onDrop={handleDrop("pants")} onDragOver={(e) => e.preventDefault()}>
            {outfit.pants && (
              <img src={outfit.pants.image} alt="Pants" className="w-44 h-44 cursor-pointer"
                onClick={handleRemove("pants")} />
            )}
          </div>

          <div className="absolute bottom-4 ml-28 w-24 h-24 flex justify-center items-center"
            onDrop={handleDrop("bottom")} onDragOver={(e) => e.preventDefault()}>
            {outfit.bottom && (
              <img src={outfit.bottom.image} alt="Bottom" className="w-24 h-24 cursor-pointer"
                onClick={handleRemove("bottom")} />
            )}
          </div>
          <div className="absolute bottom-4 mr-28 w-24 h-24 flex justify-center items-center transform scale-x-[-1]"
            onDrop={handleDrop("bottom")} onDragOver={(e) => e.preventDefault()}>
            {outfit.bottom && (
              <img src={outfit.bottom.image} alt="Bottom" className="w-24 h-24 cursor-pointer"
                onClick={handleRemove("bottom")} />
            )}
          </div>
        </div>

        {/* Available Clothes + Submit Button */}
        <div className="bg-white p-6 mt-4 rounded-lg w-[400px]">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Available Clothes</h2>
          <div className="grid grid-cols-4 gap-4">
            {clothingItems.slice(0, 12).map((item) => (
              <img key={item.id} src={item.image} alt="Clothing"
                className="w-32 h-28 cursor-pointer shadow-md rounded-md border hover:scale-105 transition-transform"
                draggable onDragStart={handleDragStart(item)} />
            ))}
          </div>

          {/* Submit Button Positioned Below Available Clothes */}
          <button onClick={handleSubmit}
            className="w-full mt-16 bg-green-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-green-600 transition-all">
            Submit Outfit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Submission;







