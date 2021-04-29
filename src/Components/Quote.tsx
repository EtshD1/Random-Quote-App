import React from 'react';
import Styles from './styles.module.css';
import withContext from "../withContext";

interface contextType {
  context: {
    currentColor: {
      color: string
    },
    currentQuote: {
      quote: string,
      author: string
    }
  }
}

const Quote = ({ context }: contextType) => {
  const { currentQuote, currentColor } = context

  return (<div style={{ color: `#${currentColor.color}` }}>
    <div className={Styles.quote} id="text">{currentQuote.quote}</div>
    <div className={Styles.author} id="author"> - {currentQuote.author}</div>
  </div>)
}

export default withContext(Quote);