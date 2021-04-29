import React from 'react';
import Styles from './styles.module.css';
import withContext from '../withContext';

interface contextType {
  context: {
    newContent: Function,
    currentColor: {
      color: string,
      whiteFont: boolean
    },
    currentQuote: {
      quote: string,
      author: string
    }
  }
}

const Actions = ({ context }: contextType) => {
  const { newContent, currentColor, currentQuote } = context;

  const handleClick = () => {
    newContent();
  }

  const styleObj = { backgroundColor: `#${currentColor.color}`, color: currentColor.whiteFont ? "#fff" : "#000" };
  const twitterLink = `text=%22${currentQuote.quote.replaceAll(" ", "%20")}%22%20${currentQuote.author.replaceAll(" ", "%20")}&hashtags=quotes`

  return (<div id={Styles.actions}>
    <a target="_black" rel="noreferrer" href={`https://twitter.com/intent/tweet?${twitterLink}`} id="tweet-quote" style={styleObj}>Twitter</a>
    <div id="new-quote" onClick={handleClick} style={styleObj}>Another Quote</div>
  </div>);
}

export default withContext(Actions);