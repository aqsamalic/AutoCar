"use client";
import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const State = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    { number: 100, suffix: '+', label: 'Satisfied Global Clients' },
    { number: 10, suffix: 'K+', label: ' Projects Successfully Delivered' },
    { number: 20, suffix: '+', label: ' Dedicated Team Members' },
    { number: 5, suffix: '+', label: 'Years of Industry Experience' },
  ];

  return (
    <div className="flex justify-center bg-black items-center min-h-screen  text-white px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full py-16 px-8 bg-black border border-gray-800 rounded-lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              Our <span className="text-red-800">Success</span> Story
            </h2>
            <p className="text-white max-w-lg">
            We work with leading vehicle data providers around the world to ensure comprehensive and reliable information.lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore nulla pariatur. 
            </p>
          </div>

          <div ref={ref}>
            <div className="grid grid-cols-2 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-4xl sm:text-5xl font-bold">
                    {inView ? (
                      <CountUp
                        end={stat.number}
                        duration={2.5}
                        separator=","
                        suffix={stat.suffix}
                        className="text-red-800"
                      />
                    ) : (
                      <span className="text-red-800">0{stat.suffix}</span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base text-white">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default State;

