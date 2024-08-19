import React from 'react';

const MovieInfo = ({ movie }) => {
  if (!movie) return null; // Render nothing if no movie is selected

  return (
    <div className="movie-info">
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <h2 className="movie-title">{movie.Title}</h2>
      <ul className="movie-misc-info">
        <li className="year">{movie.Year}</li>
        <li className="rated">{movie.Rated}</li>
        <li className="released">{movie.Released}</li>
      </ul>
      <p className="plot">{movie.Plot}</p>
      <p className="genre">{movie.Genre}</p>
      <p className="language">Language: {movie.Language}</p>
      <p className="awards">Awards: {movie.Awards}</p>
    </div>
  );
};

export default MovieInfo;
