"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navbar({ toggleDarkMode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navbar = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about-us' },
    { name: 'Services', id: 'services' },
    { name: 'Packages', id: 'packages' },
    { name: 'Contact us', id: 'contact' },
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 70, // adjust for navbar height
        behavior: 'smooth',
      });
    }
  };

  const handleScrollWithClose = (id) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => scrollToSection(id), 300);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black text-white shadow-lg' : 'bg-black text-white'
      }`}
    >
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        {/* Logo */}
        <div className="flex items-center h-[60px]">
          <div className="relative w-[120px] h-[60px]">
            <Image 
              src="/Logo.png"
              alt="Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Center Navbar Links */}
        <div className="hidden md:flex items-center justify-center space-x-6">
          {navbar.map((item) => (
            <span
              key={item.name}
              onClick={() => scrollToSection(item.id)}
              className="cursor-pointer text-lg hover:underline transition-all duration-300"
            >
              {item.name}
            </span>
          ))}
        </div>

        {/* Right side Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button 
            onClick={() => scrollToSection('contact')}
            className="px-4 py-2 rounded-md border border-red-800 hover:bg-red-800 hover:text-black transition-all duration-300"
          >
            Contact Us
          </button>
          <button 
            onClick={() => scrollToSection('packages')}
            className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-all duration-300"
          >
            View Price
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? '✖' : '☰'}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-black text-white py-4 px-6">
          <div className="flex flex-col space-y-4">
            {navbar.map((item) => (
              <span
                key={item.name}
                onClick={() => handleScrollWithClose(item.id)}
                className="cursor-pointer hover:underline text-lg transition-all duration-300"
              >
                {item.name}
              </span>
            ))}

            {/* Mobile Buttons */}
            <div className="flex flex-col space-y-2 pt-4">
              <button 
                onClick={() => handleScrollWithClose('contact')}
                className="px-4 py-2 rounded-md border border-red-800 hover:bg-white hover:text-black transition-all duration-300"
              >
                Contact Us
              </button>
              <button 
                onClick={() => handleScrollWithClose('packages')}
                className="px-4 py-2 bg-white text-black rounded-md hover:bg-gray-200 transition-all duration-300"
              >
                View Price
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
