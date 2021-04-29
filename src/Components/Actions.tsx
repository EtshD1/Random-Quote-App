import React from 'react';
import Styles from './styles.module.css';
import withContext from '../withContext';

interface contextType {
  context: {
    newContent: Function,
    currentColor: {
      color: string,
      whiteFont: boolean
    }
  }
}

const Actions = ({ context }: contextType) => {
  const { newContent, currentColor } = context;

  const handleClick = () => {
    newContent();
  }

  const styleObj = { backgroundColor: `#${currentColor.color}`, color: currentColor.whiteFont ? "#fff" : "#000" };

  return (<div id={Styles.actions}>
    <a href="twitter.com/intent/tweet" id="tweet-quote" style={styleObj}>Twitter</a>
    <div id="new-quote" onClick={handleClick} style={styleObj}>Another Quote</div>
  </div>);
}

export default withContext(Actions);