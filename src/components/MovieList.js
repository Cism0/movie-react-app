import React from 'react';

const MovieList = ({ movies, onSelectMovie }) => {
  return (
    <div className="result-grid">
      {movies.map((movie) => (
        <div 
          key={movie.imdbID} 
          className="search-list-item" 
          onClick={() => onSelectMovie(movie.imdbID)}
        >
          <div className="search-item-thumbnail font-color-white">
            <img 
              src={movie.Poster !== "N/A" ? movie.Poster : "image_not_found.png"} 
              alt={movie.Title} 
            />
          </div>
          <div className="search-item-info">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
