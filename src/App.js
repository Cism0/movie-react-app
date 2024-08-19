import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieInfo from './components/MovieInfo';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  return (
    <div className="wrapper">
      <Navbar />
      <SearchBar setMovies={setMovies} />
      <MovieList movies={movies} onSelectMovie={setSelectedMovie} />
      <MovieInfo movie={selectedMovie} />
    </div>
  );
}

export default App;
