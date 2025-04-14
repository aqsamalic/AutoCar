"use client";
import React from "react";
import { motion } from "framer-motion";

const logos = [
  "/at.png",
  "/be.png",
  "/br.png",
  "/ch.png",
  "/cn.png",
  "/dk.png",
  "/eg.png",
  "/es.png",
  "/fr.png",
  "/gr.png",
];

export default function TrustedClient() {
  return (
    <section className="w-full bg-black text-white py-10 px-4 md:px-8">
      {/* Heading + Subheading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Trusted Worldwide</h2>
        <p className="text-gray-300 mt-2 text-sm md:text-base">
          Our vehicle history reports are available in countries around the globe
        </p>
      </div>

      {/* Scrolling Logos */}
      <div className="overflow-hidden relative">
        <motion.div
          className="flex space-x-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="bg-neutral-900 p-3 hover:border-red rounded-lg shadow-md min-w-[100px] flex flex-col items-center"
            >
              <img
                src={logo}
                alt={`Logo ${index}`}
                className="h-12 md:h-16 object-contain"
              />
              <span className="text-sm mt-2">Country</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
