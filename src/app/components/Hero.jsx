"use client";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Sample car images array - replace with your actual images
const carImages = [
  '/H1.jpg',
  '/12.jpg',
  '/H4.jpg',
  '/M3.jpg',
  
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === carImages.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentImage((prev) => (prev === carImages.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentImage((prev) => (prev === 0 ? carImages.length - 1 : prev - 1));
  };

  return (
    <div id='home' className="bg-black w-full mt-0 pt-16">
      <div className="flex flex-col lg:flex-row text-white p-4 md:p-6 max-w-7xl mx-auto min-h-[60vh] rounded-lg">
        {/* Left Section - reduced width to create more space between sections */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center lg:pr-0 mb-6 lg:mb-0">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3">
            Be Smart And Check In Advance. <span className="text-red-800">AUDIT</span>
          </h1>

          <p className="text-gray-300 mb-4 text-sm md:text-base">
            AUDIT is an international provider of vehicle histories with the goal of
            making the used car market more transparent and our roads safer worldwide.
          </p>

          <h2 className="text-lg md:text-xl text-red-800 font-medium mb-4">
            Get A VIN Check With AUDIT.
          </h2>

          <div className="space-y-3 mb-4">
            <div>
              <label className="block text-white text-xs mb-1">Enter VIN / HIN Number</label>
              <input
                type="text"
                placeholder="Enter VIN / HIN Number"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-800 focus:outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-white text-xs mb-1">Enter Phone Number</label>
              <input
                type="tel"
                placeholder="Enter Phone Number"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-800 focus:outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-white text-xs mb-1">Enter Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full p-2 rounded bg-gray-800 text-white border border-gray-700 focus:border-red-800 focus:outline-none text-sm"
              />
            </div>
          </div>

          <button className="w-full py-3 px-4 rounded bg-gradient-to-r from-red-800 to-red-600 text-white font-semibold transition-transform hover:translate-y-px focus:outline-none text-sm">
            VIN Check
          </button>
        </div>

        {/* Space between sections */}
        <div className="hidden lg:block lg:w-1/10"></div>

        {/* Right Image Slider - adjusted width and spacing */}
        <div className="w-full lg:w-1/2 relative rounded-xl overflow-hidden h-56 md:h-64 lg:h-auto mt-4 lg:mt-0">
          <div className="h-full relative">
            {carImages.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImage ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <div className="relative w-full h-full">
                  <div
                    className="w-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${src})`,
                      height: '500px',
                    }}
                  ></div>
                   <div className="absolute inset-0 bg-white/10 transition-all duration-300 transform scale-x-0 origin-left group-hover:scale-x-100"></div>
                   <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                   <motion.div
            className="absolute -right-8 -bottom-8 bg-red-800 rounded-xl p-4 shadow-lg w-48"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-2">
              <div className="h-3 w-5 rounded-full bg-red-800" />
              <span className="text-sm font-medium text-black">
                Innovation First
              </span>
            </div>
          </motion.div>
          <motion.div
            className="absolute -left-8 -top-8 bg-red-800 rounded-xl p-4 shadow-lg w-48"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-red-800" />
              <span className="text-sm font-medium text-black">
                Future Ready
              </span>
            </div>
          </motion.div>
         
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white z-10 hover:bg-opacity-70 focus:outline-none"
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 rounded-full bg-black bg-opacity-50 flex items-center justify-center text-white z-10 hover:bg-opacity-70 focus:outline-none"
          >
            ❯
          </button>

          {/* Dots Navigation */}
          {/* <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {carImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`h-2 transition-all ${
                  index === currentImage
                    ? 'w-4 bg-cyan-400 rounded-sm'
                    : 'w-2 bg-white bg-opacity-50 rounded-full'
                }`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}