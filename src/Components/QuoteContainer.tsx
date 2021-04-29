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

  return (<>
    <div className={Styles.quoteContainer} id="quote-box" style={{ backgroundColor: `#${currentColor.color}` }}>
      <div>
        <div style={{ backgroundColor: currentColor.whiteFont ? "#fff" : "#000" }}>
          <Quote />
          <Actions />
        </div>
        <div className={Styles.madeBy} style={{ color: currentColor.whiteFont ? "#fff" : "#000" }}>by <a href="https://github.com/EtshD1">EtshD1</a></div>
      </div>
    </div>
  </>);
}

export default withContext(QuoteContainer);