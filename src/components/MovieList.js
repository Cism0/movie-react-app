import React from 'react';
import { useNavigate } from 'react-router-dom';

const MovieList = ({ movies }) => {
  const navigate = useNavigate();

  const handleMovieClick = (id) => {
    navigate(`/movie/${id}`);
  };

  return (
    <div className="result-grid">
      {movies.map((movie) => (
        <div 
          key={movie.imdbID} 
          className="search-list-item" 
          onClick={() => handleMovieClick(movie.imdbID)}
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
