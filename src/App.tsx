import React, { useState } from 'react';
import QuoteContainer from './Components/QuoteContainer';
import Context from "./Context";
import quotes from "./quotes";
import colors from "./colors";

const App = () => {
  const [currentQuote, setCurrentQuote] = useState(quotes[Math.floor(quotes.length * Math.random())]);
  const [currentColor, setCurrentColor] = useState(colors[Math.floor(colors.length * Math.random())]);

  const newContent = () => {
    setCurrentQuote(quotes[Math.floor(quotes.length * Math.random())]);
    setCurrentColor(colors[Math.floor(colors.length * Math.random())]);
  }

  return (<Context.Provider value={{ currentQuote, currentColor, newContent }}>
    <QuoteContainer />
  </Context.Provider>);
}

export default App;