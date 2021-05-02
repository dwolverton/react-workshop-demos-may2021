import { useState, useEffect } from 'react';
import Quote from './Quote';

function QuoteList() {
  // state where we can store the API results
  const [ quotes, setQuotes ] = useState([]);

  // run code once when the component first
  useEffect(() => {
    // fetch is JavaScript built-in way to call an API
    fetch("https://grandcircusco.github.io/demo-apis/quotes.json")
    .then(res => res.json())
    .then(data => {
      // set the state using the API data
      // It's up to us to find the part of the JSON we need (an array).
      setQuotes(data);
    });
  }, []);

  return (
    <section>
      <h2>Quotes</h2>
      {/* in map, select the properties from the JSON to use */}
      {quotes.map( (quote, index) => 
        <Quote key={index}
                  author={quote.author}
                  text={quote.text} />)}
    </section>
  )
}

export default QuoteList;