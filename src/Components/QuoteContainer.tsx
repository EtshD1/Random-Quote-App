import React from 'react';
import Styles from './styles.module.css';
import Actions from './Actions';
import Quote from './Quote';

const QuoteContainer = () => {
  return (<div className={Styles.quoteContainer} id="quote-box">
    <div>
      <Quote />
      <Actions />
    </div>
  </div>);
}

export default QuoteContainer;