import React, { useState } from 'react';
import './Home.css'; 

const Home = () => {
  const [quote, setQuote] = useState({ quote: 'Fuel your mind with wisdom, instantly!', author: '' });
  const [loading, setLoading] = useState(false);  


  const getQuote = () => {
    setLoading(true);  
    fetch('/data.json')  
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        const randomQuote = data[Math.floor(Math.random() * data.length)];
        setQuote(randomQuote);
        setLoading(false); 
      })
      .catch((error) => {
        console.error('Error fetching quote:', error);
        setLoading(false);  
      });
  };


  const tweetQuote = () => {
    const tweetText = `"${quote.quote}" - ${quote.author}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    window.open(twitterUrl, '_blank');  
  };

  return (
    <div className="quote-container">
   

      <div className="quote-text">
        {loading ? 'Loading quote...' : `"${quote.quote}"`}
      </div>

      <div className="quote-author">
        {quote.author && `- ${quote.author}`}
      </div>

       <button className="get-quote" onClick={getQuote}>Get New Quote</button>

       {quote.quote && !loading && (
        <button className="tweet-quote" onClick={tweetQuote}>
          Let's Tweet
        </button>
      )}
    </div>
  );
};

export default Home;
