import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    const defaultQuote = selectQuote();
    this.state={
      text:defaultQuote.text,
      author:defaultQuote.author
    };
    this.newQuote = this.newQuote.bind(this);
  }

  newQuote(){
    const newQuote = selectQuote();
    this.setState(()=>{
      return {
        text:newQuote.text,
        author:newQuote.author
      }
    })
  }

  render(){
    return(
      <div id='quote-box'>
        <Quote quote={this.state}/>
        <button id='new-quote' onClick={this.newQuote}>new quote</button>
        <div id='link'>
          <a id='tweet-quote' href="//twitter.com/intent/tweet">tweet</a>
        </div>
      </div>
    );
  }
};

class Quote extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div id='text'>{this.props.quote.text}</div>
        <div id='author'>{this.props.quote.author}</div>
      </div>
    );
  }
};

const quotes = [
  {text:'quote-text-1', author:'author1'},
  {text:'quote-text-2', author:'author2'},
  {text:'quote-text-3', author:'author3'},
  {text:'quote-text-4', author:'author4'},
  {text:'quote-text-5', author:'author5'}
];

const selectQuote = () => {
  const randomIndex = Math.floor(Math.random()*5);
  return quotes[randomIndex];
}

export default App;
