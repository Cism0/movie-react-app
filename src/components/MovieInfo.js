// import React from 'react';

// const MovieInfo = ({ movie }) => {
//   if (!movie) return null;

//   return (
//     <div className="movie-info">
//       <div className="movie-poster">
//         <img 
//           src={movie.Poster !== "N/A" ? movie.Poster : "image_not_found.png"} 
//           alt={movie.Title} 
//         />
//       </div>
//       <div className="movie-info-details">
//         <h3 className="movie-title">{movie.Title}</h3>
//         <ul className="movie-misc-info">
//           <li className="year">Year: {movie.Year}</li>
//           <li className="rated">Ratings: {movie.Rated}</li>
//           <li className="released">Released: {movie.Released}</li>
//         </ul>
//         <p className="genre"><b>Genre:</b> {movie.Genre}</p>
//         <p className="writer"><b>Writer:</b> {movie.Writer}</p>
//         <p className="actors"><b>Actors:</b> {movie.Actors}</p>
//         <p className="plot"><b>Plot:</b> {movie.Plot}</p>
//         <p className="language"><b>Language:</b> {movie.Language}</p>
//         <p className="awards"><b><i className="fas fa-award"></i></b> {movie.Awards}</p>
//       </div>
//     </div>
//   );
// };

// export default MovieInfo;

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieInfo = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=fc1fef96`);
      const data = await response.json();
      setMovie(data);
    };

    fetchMovieDetails();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-info">
      <div className="movie-poster">
        <img 
          src={movie.Poster !== "N/A" ? movie.Poster : "image_not_found.png"} 
          alt={movie.Title} 
        />
      </div>
      <div className="movie-info-details">
        <h3 className="movie-title">{movie.Title}</h3>
        <ul className="movie-misc-info">
          <li className="year">Year: {movie.Year}</li>
          <li className="rated">Ratings: {movie.Rated}</li>
          <li className="released">Released: {movie.Released}</li>
        </ul>
        <p className="genre"><b>Genre:</b> {movie.Genre}</p>
        <p className="writer"><b>Writer:</b> {movie.Writer}</p>
        <p className="actors"><b>Actors:</b> {movie.Actors}</p>
        <p className="plot"><b>Plot:</b> {movie.Plot}</p>
        <p className="language"><b>Language:</b> {movie.Language}</p>
        <p className="awards"><b><i className="fas fa-award"></i></b> {movie.Awards}</p>
      </div>
    </div>
  );
};

export default MovieInfo;
