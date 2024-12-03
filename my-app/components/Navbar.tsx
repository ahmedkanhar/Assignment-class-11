"use client"
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-red-900 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <span className="text-yellow-400">My</span>Car<span className="text-yellow-400">Collection</span>
        </div>

        {/* Menu for Larger Screens */}
        <div className="hidden lg:flex space-x-6">
          <a href="#" className="hover:text-yellow-400 transition">Home</a>
          <a href="#showcase" className="hover:text-yellow-400 transition">Collection</a>
          <a href="#categories" className="hover:text-yellow-400 transition">Categories</a>
          <a href="#about" className="hover:text-yellow-400 transition">About Us</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>

        {/* Menu Toggle Button for Mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Collapsible Menu for Smaller Screens */}
      {isMenuOpen && (
        <div className="lg:hidden bg-blue-500">
          <a href="#" className="block px-4 py-2 hover:bg-blue-400">Home</a>
          <a href="#showcase" className="block px-4 py-2 hover:bg-blue-400">Showcase</a>
          <a href="#categories" className="block px-4 py-2 hover:bg-blue-400">Categories</a>
          <a href="#about" className="block px-4 py-2 hover:bg-blue-400">About Us</a>
          <a href="#contact" className="block px-4 py-2 hover:bg-blue-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
