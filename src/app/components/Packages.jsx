"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
// import Discount from "../components/main/DiscountPage";

const Packages = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const packagesData = [
    {
      name: "Basic Package",
      description: "Kickstart Your Digital Journey",
      prices: {
        monthly: "33,000",
        quarterly: "93,000",
        semiannual: "183,000",
      },
      features: [
        "1-2 Page Website",
        "Basic SEO & Google Analytics Setup",
        "Ignite Your Social Presence with 1 Platform",
        "Clean Logo & Essential Graphic Design",
        "On-Demand Support",
      ],
    },
    {
      name: "Standard Package",
      description: "Elevate Your Brand to New Heights",
      prices: {
        monthly: "58,000",
        quarterly: "168,000",
        semiannual: "333,000",
      },
      features: [
        "Up to 5 Pages of Mobile-Friendly Website",
        "Comprehensive ON Page & OFF Page SEO",
        "Manage 2 Social Media Platforms with Engaging Posts",
        "Targeted Google Ads setup",
        "Advanced Analytics & Strategy Sessions",
        "Design Upgrades with Creative Freedom",
      ],
      featured: true,
    },
    {
      name: "Premium Package",
      description: "Dominate the Digital Space",
      prices: {
        monthly: "83,000",
        quarterly: "243,000",
        semiannual: "483,000",
      },
      features: [
        "Custom-Built, Fully Optimized Website with Advanced Features",
        "Comprehensive SEO Strategy for Top Rankings",
        "Social Media Mastery with Premium Content & Ads",
        "Full Google Ads Management with Strategic Retargeting",
        "Complete Brand Makeover",
        "24/7 Support with Your Dedicated Account Manager",
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
            Explore Our Packages
          </h1>
          <p className="text-lg mt-6 text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan to elevate your digital presence
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
          {packagesData.map((pkg, index) => (
            <motion.div
              key={index}
              className={`bg-gray-900 rounded-2xl p-8 ${pkg.featured ? "ring-2 ring-red-800" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-gray-300">{pkg.description}</p>
                <div className="mt-6">
                  <span className="text-xl text-gray-500 line-through">
                    PKR {pkg.prices[timeframe]}
                  </span>
                  <br />
                  <span className="text-3xl font-bold text-red-800">
                    PKR {Math.round(Number(pkg.prices[timeframe].replace(/,/g, "")) * 0.7).toLocaleString()}
                  </span>
                  <span className="text-white">/{timeframe}</span>
                </div>
              </div>
              <ul className="space-y-4 mb-8 text-white">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <motion.div className="mt-auto" whileHover={{ scale: 1.05 }}>
                <Link href="/Contact" className="block w-full text-center bg-black hover:bg-red-800 text-white font-medium py-3 px-6 rounded-lg">
                  Get Started
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
