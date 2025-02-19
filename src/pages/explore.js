import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

import c11 from "../assets/c11.jpg";
import c12 from "../assets/c12.jpg";
import c13 from "../assets/c13.jpg";
import c14 from "../assets/c14.jpg";

function Explore() {
  const trendingSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,        // Auto slides
    autoplaySpeed: 3000,   // Slide every 3 seconds
    arrows: true,          // Show prev/next arrows
  };

  const winningSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      <section className="flex flex-col mr-24 items-center justify-center px-8 py-16 md:flex-row md:justify-around">
        <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
          <div className="w-[26rem] h-[18rem]">
            <Slider {...trendingSettings}>
              <div>
                <img
                  src={c11}
                  alt="Trending 1"
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
              <div>
                <img
                  src={c12}
                  alt="Trending 2"
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
              <div>
                <img
                  src={c13}
                  alt="Winning 1"
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
              <div>
                <img
                  src={c14}
                  alt="Winning 2"
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </Slider>
          </div>
        </div>

        <div className="md:w-1/2 max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-ddpurple mb-4">
            Trending this week.
          </h1>
          <p className="text-dlpurple mb-6">
            Check what’s <em>chic</em> this week.
          </p>
          <Link
            to=""
            className="bg-mlpurple text-ddpurple px-5 py-2 rounded-md font-medium shadow hover:bg-purple-400 transition"
          >
            View
          </Link>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center px-8 py-16 mt-[7rem] mb-8 md:flex-row md:justify-around">
        <div className="md:w-1/2 max-w-lg ml-32 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-ddpurple mb-4">
            What’s winning?
          </h2>
          <p className="text-dlpurple mb-6">
            Browse through a catalogue of this week’s top <em>chic</em> outfits.
          </p>
          <Link
            to=""
            className="bg-mlpurple text-ddpurple px-5 py-2 rounded-md font-medium shadow hover:bg-purple-400 transition"
          >
            View
          </Link>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="w-[26rem] h-[18rem]">
            <Slider {...winningSettings}>
              <div>
                <img
                  src={c13}
                  alt="Winning 1"
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
              <div>
                <img
                  src={c14}
                  alt="Winning 2"
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Explore;
