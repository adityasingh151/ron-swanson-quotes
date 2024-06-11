// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-md mt-auto">
      <div className="container mx-auto text-center">
        <p>
          Made with love by{' '}
          <a
            href="https://github.com/adityasingh151"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-200 underline hover:text-blue-400"
          >
            Aditya
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
