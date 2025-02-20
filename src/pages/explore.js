import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import Navbar from "../components/navbar";

import c11 from "../assets/c11.png";
import c12 from "../assets/c12.png";
import c13 from "../assets/c13.png";
import c14 from "../assets/c14.jpg";

import c21 from "../assets/c21.png";
import c22 from "../assets/c22.jpg";
import c23 from "../assets/c23.jpg";
import c24 from "../assets/c24.jpg";

function Explore() {
  const trendingSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,       
    autoplaySpeed: 3000,   
    arrows: true,          
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
    <div className="bg-white font-inter spacing-supertight min-h-screen">
      <Navbar />

      <section className="flex flex-col items-center justify-center px-2 md:flex-row md:justify-around">
        <div className="md:w-1/2 flex justify-center md:mb-0">
          <div className="w-[28rem] h-[20rem]">
            <Slider {...trendingSettings}>
              <div>
                <img
                  src={c11}
                  alt="Trending 1"
                  className="rounded-xl w-[32rem] h-[24rem] object-cover"
                />
              </div>
              <div>
                <img
                  src={c12}
                  alt="Trending 2"
                  className="rounded-xl w-[32rem] h-[24rem] object-cover"
                />
              </div>
              <div>
                <img
                  src={c13}
                  alt="Winning 1"
                  className="rounded-xl w-[32rem] h-[24rem] object-cover"
                />
              </div>
              <div>
                <img
                  src={c14}
                  alt="Winning 2"
                  className="rounded-xl w-[32rem] h-[24rem] object-cover"
                />
              </div>
            </Slider>
          </div>
        </div>

        <div className="md:w-1/2 py-[10rem] max-w-lg text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-ddpurple mb-4">
            Trending this week.
          </h1>
          <p className="text-dlpurple mb-6">
            Check what’s <em>chic</em> this week.
          </p>
          <Link
            to="/store"
            className="bg-mlpurple text-ddpurple px-5 py-2 rounded-md font-medium shadow hover:scale-105 transition-transform"
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
            to="/store"
            className="bg-mlpurple text-ddpurple px-5 py-2 rounded-md font-medium shadow hover:scale-105 transition-transform"
          >
            View
          </Link>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="w-[28rem] h-[20rem]">
            <Slider {...winningSettings}>
              <div>
                <img
                  src={c21}
                  alt="Winning 1"
                  className="rounded-xl w-[32rem] h-[24rem] object-cover"
                />
              </div>
              <div>
                <img
                  src={c22}
                  alt="Winning 2"
                  className="rounded-xl w-[32rem] h-[24rem] object-cover"
                />
              </div>
              <div>
                <img
                  src={c23}
                  alt="Winning 2"
                  className="rounded-xl w-[32rem] h-[24rem] object-cover"
                />
              </div>
              <div>
                <img
                  src={c24}
                  alt="Winning 2"
                  className="rounded-xl w-[32rem] h-[24rem] object-cover"
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
