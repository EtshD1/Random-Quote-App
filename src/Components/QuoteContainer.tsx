import React from 'react';
import Styles from './styles.module.css';
import Actions from './Actions';
import Quote from './Quote';
import withContext from '../withContext';

interface contextType {
  context: {
    currentColor: {
      color: string,
      whiteFont: boolean
    }
  }
}

const QuoteContainer = ({ context }: contextType) => {
  const { currentColor } = context;

  return (<div className={Styles.quoteContainer} id="quote-box" style={{ backgroundColor: `#${currentColor.color}` }}>
    <div style={{ backgroundColor: currentColor.whiteFont ? "#fff" : "#000" }}>
      <Quote />
      <Actions />
    </div>
  </div>);
}

export default withContext(QuoteContainer);