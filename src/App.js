import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import MovieInfo from './components/MovieInfo';
import Navbar from './components/Navbar';
import useMovies from './hooks/useMovies';
import './App.css';

function App() {
  const { movies, selectedMovie, fetchMovies, fetchMovieDetails, loading } = useMovies();

  return (
    <Router>
      <div className="wrapper">
        <Navbar />
        <main>
          <SearchBar onSearch={fetchMovies} />
          {loading && <div className="spinner">Loading...</div>}
          <Routes>
            <Route 
              path="/" 
              element={
                <>
                  <MovieList movies={movies} onSelectMovie={fetchMovieDetails} />
                  {selectedMovie && <MovieInfo movie={selectedMovie} />}
                </>
              } 
            />
            <Route 
              path="/movie/:id" 
              element={
                <>
                  {movies.length > 0 && <MovieList movies={movies} onSelectMovie={fetchMovieDetails} />}
                  <MovieInfo movie={selectedMovie} />
                </>
              } 
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
