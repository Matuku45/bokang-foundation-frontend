import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-3 md:p-4">

     {/* Logo Section */}
<div className="flex items-center gap-3 md:gap-4">

  {/* CLICKABLE LOGO */}
  <Link to="/" className="flex items-center gap-3 md:gap-4">

    <div className="bg-pink-600/30 p-2 rounded-full shadow-lg flex items-center justify-center hover:scale-105 transition">
      <img
        src={logo}
        alt="Bokang Logo"
        className="w-10 h-10 md:w-12 md:h-12 object-contain rounded-full"
      />
    </div>

    <span className="text-base md:text-xl font-bold tracking-wide text-white">
      Bokang Foundation
    </span>

  </Link>

</div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-3xl font-bold text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto 
          bg-pink-300 md:bg-transparent transition-all duration-300 ease-in-out 
          ${isOpen ? "block" : "hidden"} md:block`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 p-4 md:p-0 text-white">

            <li><Link to="/" className="hover:text-pink-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-pink-600">About</Link></li>
            <li><Link to="/events" className="hover:text-pink-600">Events</Link></li>
            <li><Link to="/gallery" className="hover:text-pink-600">Gallery</Link></li>
            <li><Link to="/quotes" className="hover:text-pink-600">Quotes</Link></li>
            <li><Link to="/feedback" className="hover:text-pink-600">Feedback</Link></li>

          </ul>

          {/* Auth Buttons */}
          <div className="flex flex-col md:flex-row gap-2 md:ml-6 p-4 md:p-0">
            <Link
              to="/faq"
              className="bg-white text-pink-500 px-3 py-1 rounded hover:bg-pink-100 transition"
            >
            FAQs
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;