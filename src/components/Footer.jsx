import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pink-500 via-pink-400 to-pink-300 text-white mt-10">

      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand / Logo Section */}
        <div className="flex flex-col items-start">

          {/* BIG LOGO */}
          <div className="bg-white/20 p-4 rounded-full shadow-lg mb-4">
            <img
              src={logo}
              alt="Bokang Logo"
              className="w-20 h-20 md:w-24 md:h-24 object-contain rounded-full"
            />
          </div>

          <h2 className="text-2xl font-bold mb-2">
            Bokang Foundation
          </h2>

          <p className="text-sm text-pink-100 leading-relaxed">
            Bokang Foundation is dedicated to empowering communities through
            education, support programs, outreach events, and volunteer work.
            Together we build a better future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Quick Links</h2>

          <ul className="space-y-2 text-sm text-pink-100">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/events" className="hover:text-white">Events</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Contact Us</h2>

          <div className="text-sm text-pink-100 space-y-2">
            <p>Email: info@bokangfoundation.org</p>
            <p>Phone: +27 84 000 0010</p>
            <p>Location: South Africa</p>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-pink-200 text-center py-4 text-sm text-pink-100">
        © {new Date().getFullYear()} Bokang Foundation. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;