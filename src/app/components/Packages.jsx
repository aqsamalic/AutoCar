"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Packages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const vehicleData = [
    {
      name: "Economy Car",
      description: "Affordable & Efficient for City Driving",
      prices: {
        monthly: "45,000",
        quarterly: "130,000",
        semiannual: "250,000",
      },
      features: [
        "Fuel Efficient (20+ km/l)",
        "Compact Size, Easy Parking",
        "Basic Safety Features",
        "Ideal for Daily Commute",
        "Support Available on Demand",
      ],
    },
    {
      name: "SUV",
      description: "Power & Comfort for Family or Long Rides",
      prices: {
        monthly: "85,000",
        quarterly: "245,000",
        semiannual: "470,000",
      },
      features: [
        "Spacious Interior with Extra Luggage Space",
        "Advanced Safety & Navigation",
        "Suitable for All Terrains",
        "Premium Comfort & Interior",
        "Free Maintenance Check Every 3 Months",
      ],
      featured: true,
    },
    {
      name: "Luxury Car",
      description: "Drive with Style & Premium Performance",
      prices: {
        monthly: "130,000",
        quarterly: "375,000",
        semiannual: "720,000",
      },
      features: [
        "High-End Design & Technology",
        "Top-Notch Performance & Handling",
        "Leather Interior with Smart Features",
        "Priority Support & Concierge Service",
        "Custom Driving Experience",
      ],
    },
  ];

  const [timeframe, setTimeframe] = useState("monthly");
  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
  };

  return (
    <div id="packages" className="min-h-screen bg-black">
      <div className="bg-black text-white py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-white">
            Choose Your Vehicle
          </h1>
          <p className="text-lg mt-6 text-gray-300 max-w-2xl mx-auto">
            Select a ride that suits your needs and budget
          </p>
        </motion.div>
      </div>

      <div className="flex justify-center items-center mt-12 mb-8">
        <label htmlFor="timeframe" className="mr-3 text-lg text-white font-semibold">
          Select Timeframe:
        </label>
        <motion.div className="border-2 border-red-800 rounded-lg p-2" whileHover={{ scale: 1.02 }}>
          <select
            value={timeframe}
            onChange={handleTimeframeChange}
            className="p-2 text-lg font-medium bg-transparent border-none text-red-800 focus:outline-none"
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="semiannual">Semi-Annual</option>
          </select>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {vehicleData.map((vehicle, index) => (
            <motion.div
              key={index}
              className={`bg-gray-900 rounded-2xl p-8 ${vehicle.featured ? "ring-2 ring-red-800" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{vehicle.name}</h3>
                <p className="text-gray-300">{vehicle.description}</p>
                <div className="mt-6">
                  <span className="text-xl text-gray-500 line-through">
                    PKR {vehicle.prices[timeframe]}
                  </span>
                  <br />
                  <span className="text-3xl font-bold text-red-800">
                    PKR {Math.round(Number(vehicle.prices[timeframe].replace(/,/g, "")) * 0.85).toLocaleString()}
                  </span>
                  <span className="text-white">/{timeframe}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 text-white">
                {vehicle.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.div className="mt-auto" whileHover={{ scale: 1.05 }}>
                <Link href="/Contact" className="block w-full text-center bg-black hover:bg-red-800 text-white font-medium py-3 px-6 rounded-lg">
                  Book Now
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Packages;
