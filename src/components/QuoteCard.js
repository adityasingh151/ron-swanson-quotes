// src/components/QuoteCard.jsx
import React from 'react';

const QuoteCard = ({ quote, onSave }) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg p-6 bg-gradient-to-r from-green-200 to-blue-200">
      <p className="text-gray-800 text-xl font-semibold mb-4">{quote}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={onSave}
      >
        Save to List
      </button>
    </div>
  );
};

export default QuoteCard;
