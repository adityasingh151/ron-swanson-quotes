// src/components/SavedQuotes.jsx
import React from 'react';

const SavedQuotes = ({ quotes, onDelete }) => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Saved Quotes</h2>
      {quotes.length === 0 ? (
        <p className="text-gray-600">No saved quotes yet.</p>
      ) : (
        quotes.map((quote, index) => (
          <div
            key={index}
            className="max-w-sm rounded-lg overflow-hidden shadow-lg p-6 mb-4 bg-gradient-to-r from-yellow-200 to-red-200"
          >
            <p className="text-gray-800 text-xl font-semibold mb-4">{quote}</p>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              onClick={() => onDelete(index)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default SavedQuotes;
