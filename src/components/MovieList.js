import React from 'react';

const MovieList = ({ movies, onSelectMovie }) => {
  if (!movies.length) return null; // Render nothing if no movies are available

  return (
    <div className="result-grid">
      {movies.map((movie, index) => (
        <div
          className="movie-info"
          key={index}
          onClick={() => onSelectMovie(movie)}
        >
          <div className="movie-poster">
            <img src={movie.Poster} alt={movie.Title} />
          </div>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
