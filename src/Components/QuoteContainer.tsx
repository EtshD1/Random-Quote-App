import React from 'react';
import Styles from './styles.module.css';
import Actions from './Actions';
import Quote from './Quote';

const QuoteContainer = () => {
  return (<div id="quote-box">
    <Quote />
    <Actions />
  </div>);
}

export default QuoteContainer;