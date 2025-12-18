'use client'
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} TripMate AI. All rights reserved.
        </div>
        <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
          <a href="#" className="hover:text-primary transition">
            Privacy
          </a>
          <a href="#" className="hover:text-primary transition">
            Terms
          </a>
          <a href="#" className="hover:text-primary transition">
            Contact
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;