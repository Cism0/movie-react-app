// import React, { useState } from 'react';
// import SearchBar from './components/SearchBar';
// import MovieList from './components/MovieList';
// import MovieInfo from './components/MovieInfo';
// import Navbar from './components/Navbar';
// import './App.css';

// function App() {
//   const [movies, setMovies] = useState([]);
//   const [selectedMovie, setSelectedMovie] = useState(null);

//   const fetchMovies = async (searchTerm) => {
//     const response = await fetch(`https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`);
//     const data = await response.json();
//     if (data.Response === "True") {
//       setMovies(data.Search.slice(0, 6));
//     }
//   };

//   const fetchMovieDetails = async (id) => {
//     const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=fc1fef96`);
//     const data = await response.json();
//     setSelectedMovie(data);
//   };

//   return (
//     <div className="wrapper">
//       <Navbar />
//       <SearchBar onSearch={fetchMovies} />
//       <MovieList movies={movies} onSelectMovie={fetchMovieDetails} />
//       {selectedMovie && <MovieInfo movie={selectedMovie} />}
//     </div>
//   );
// }

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieInfo from './components/MovieInfo';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async (searchTerm) => {
    const response = await fetch(`https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`);
    const data = await response.json();
    if (data.Response === "True") {
      setMovies(data.Search.slice(0, 6));
    }
  };

  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <SearchBar onSearch={fetchMovies} />
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:id" element={<MovieInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
