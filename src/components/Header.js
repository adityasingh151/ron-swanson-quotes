// src/components/Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="w-full py-4 bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-md">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl font-bold">Ron Swanson Quotes</h1>
      </div>
    </header>
  );
};

export default Header;
