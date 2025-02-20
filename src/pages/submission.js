import React, { useState } from "react";
import Navbar from "../components/navbar";
import mannequin from "../assets/subman.png";
import shirt from "../assets/store/blacktee.jpg";
import shoes from "../assets/store/buckshoes.jpg";
import jacket from "../assets/store/jacket.jpg";
import sunglasses from "../assets/store/glasses.jpg";
import boots from "../assets/store/boots.jpg";

const Submission = () => {
  const clothingItems = [
    { id: "shirt", image: shirt },
    { id: "shoes", image: shoes },
    { id: "jacket", image: jacket },
    { id: "sunglasses", image: sunglasses },
    { id: "boots", image: boots },
  ];

  const [outfit, setOutfit] = useState({
    head: null,
    top: null,
    pants: null,
    bottom: null,
  });

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

  return (
    <div className="font-inter min-h-screen bg-white">
      <Navbar />
      
      <div className="px-[25%] py-4 text-left font-inter text-[1rem] text-dlpurple">
        <p>★ Drag and drop clothing items onto the mannequin to create your outfit.</p>
        <p>★ Click on an item to remove it. The mannequin only holds one item per section.</p>
      </div>

      <div className="flex flex-row items-start justify-center p-6 space-x-12">
        <div className="bg-white p-6 rounded-lg flex flex-col items-center relative w-[450px] h-[550px]">
          <img src={mannequin} alt="Mannequin" className="h-full object-cover rounded-lg opacity-80" />

          <div
            className="absolute top-12 w-20 h-20 flex justify-center items-center"
            onDrop={handleDrop("head")}
            onDragOver={(e) => e.preventDefault()}
          >
            {outfit.head && (
              <img
                src={outfit.head.image}
                alt="Head"
                className="w-20 h-20 cursor-pointer"
                onClick={handleRemove("head")}
              />
            )}
          </div>

          <div
            className="absolute top-40 w-44 h-44 flex justify-center items-center"
            onDrop={handleDrop("top")}
            onDragOver={(e) => e.preventDefault()}
          >
            {outfit.top && (
              <img
                src={outfit.top.image}
                alt="Top"
                className="w-44 h-44 cursor-pointer"
                onClick={handleRemove("top")}
              />
            )}
          </div>

          <div
            className="absolute bottom-16 w-44 h-44 flex justify-center items-center"
            onDrop={handleDrop("pants")}
            onDragOver={(e) => e.preventDefault()}
          >
            {outfit.pants && (
              <img
                src={outfit.pants.image}
                alt="Pants"
                className="w-44 h-44 cursor-pointer"
                onClick={handleRemove("pants")}
              />
            )}
          </div>

          <div
            className="absolute bottom-4 w-24 h-24 flex justify-center items-center"
            onDrop={handleDrop("bottom")}
            onDragOver={(e) => e.preventDefault()}
          >
            {outfit.bottom && (
              <img
                src={outfit.bottom.image}
                alt="Bottom"
                className="w-24 h-24 cursor-pointer"
                onClick={handleRemove("bottom")}
              />
            )}
          </div>
        </div>

        <div className="bg-white p-6 shadow-lg rounded-lg w-[400px]">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Available Clothes</h2>
          <div className="grid grid-cols-4 gap-4">
            {clothingItems.slice(0, 12).map((item) => (
              <img
                key={item.id}
                src={item.image}
                alt="Clothing"
                className="w-24 h-24 cursor-pointer shadow-md rounded-md border hover:scale-105 transition-transform"
                draggable
                onDragStart={handleDragStart(item)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Submission;





