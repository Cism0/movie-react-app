import React, { useState } from 'react';

const SearchBar = ({ setMovies }) => {
  const [query, setQuery] = useState('');

  const findMovies = async (e) => {
    if (e.key === 'Enter' && query.trim()) {
      try {
        const response = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=fc1fef96`);
        const data = await response.json();
        console.log(data);  // Debugging: Log the API response
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]);  // Clear results if no movies found
        }
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    }
  };

  return (
    <div className="search-container">
      <div className="search-element">
        <h3>Search Any Movie:</h3>
        <input
          type="text"
          className="form-control"
          placeholder="Search Movie Title ..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyUp={findMovies}
        />
      </div>
    </div>
  );
};

export default SearchBar;