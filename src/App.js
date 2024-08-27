// 1

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SearchBar from './components/SearchBar';
// import MovieList from './components/MovieList';
// import MovieInfo from './components/MovieInfo';
// import Navbar from './components/Navbar';
// import './App.css';

// function App() {
//   const [movies, setMovies] = useState([]);

//   const fetchMovies = async (searchTerm) => {
//     const response = await fetch(`https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`);
//     const data = await response.json();
//     if (data.Response === "True") {
//       setMovies(data.Search.slice(0, 6));
//     }
//   };

//   return (
//     <Router>
//       <div className="wrapper">
//         <Navbar />
//         <SearchBar onSearch={fetchMovies} />
//         <Routes>
//           <Route path="/" element={<MovieList movies={movies} />} />
//           <Route path="/movie/:id" element={<MovieInfo />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;


// 2

// import React, { useState } from 'react';
// import SearchBar from './components/SearchBar';
// import MovieList from './components/MovieList';
// import MovieInfo from './components/MovieInfo';
// import Navbar from './components/Navbar';
// import useMovies from './hooks/useMovies';
// import './App.css';

// function App() {
//   const { movies, selectedMovie, fetchMovies, fetchMovieDetails, loading } = useMovies();

//   return (
//     <div className="wrapper">
//       <Navbar />
//       <main>
//         <SearchBar onSearch={fetchMovies} />
//         {loading && <div className="spinner">Loading...</div>}
//         <MovieList movies={movies} onSelectMovie={fetchMovieDetails} />
//         {selectedMovie && <MovieInfo movie={selectedMovie} />}
//       </main>
//     </div>
//   );
// }

// export default App;


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
            <Route path="/" element={<MovieList movies={movies} onSelectMovie={fetchMovieDetails} />} />
            <Route path="/movie/:id" element={<MovieInfo movie={selectedMovie} />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
