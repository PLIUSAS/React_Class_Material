import React, { useState, useEffect } from "react";

const RandomQuote = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomQuote = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api.quotable.io/random");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const data = await response.json();
      setQuote(data.content);
      setAuthor(data.author);
      setIsLoading(false);
    } catch (error) {
      setError("An error occurred while fetching the quote.");
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomQuote();
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div>
          <p>"{quote}"</p>
          <p>- {author}</p>
        </div>
      )}
      <button onClick={fetchRandomQuote}>Get New Quote</button>
    </div>
  );
};

export default RandomQuote;
