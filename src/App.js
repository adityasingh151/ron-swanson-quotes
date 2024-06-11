// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteCard from './components/QuoteCard';
import SavedQuotes from './components/SavedQuotes';

const App = () => {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  const fetchQuote = async () => {
    const response = await fetch('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    const data = await response.json();
    setQuote(data[0]);
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const saveQuote = () => {
    setSavedQuotes([...savedQuotes, quote]);
  };

  const deleteQuote = (index) => {
    const newQuotes = savedQuotes.filter((_, i) => i !== index);
    setSavedQuotes(newQuotes);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto p-4 flex flex-col items-center justify-center">
        <QuoteCard quote={quote} onSave={saveQuote} />
        <button
          className="mt-6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={fetchQuote}
        >
          Fetch New Quote
        </button>
        <SavedQuotes quotes={savedQuotes} onDelete={deleteQuote} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
