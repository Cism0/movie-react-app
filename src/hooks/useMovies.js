import { useState } from 'react';

// Custom hook to manage movie data and related operations
const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to fetch movies based on search term
  const fetchMovies = async (searchTerm) => {
    setLoading(true);  // Set loading state to true when fetching data
    try {
      const response = await fetch(`https://omdbapi.com/?s=${searchTerm}&page=1&apikey=fc1fef96`);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search.slice(0, 6));  // Update state with fetched movies
      } else {
        setMovies([]);  // Clear movies if no results are found
      }
    } catch (error) {
      console.error('Failed to fetch movies:', error);  // Log any errors
    } finally {
      setLoading(false);  // Set loading state to false once data is fetched
    }
  };

  // Function to fetch detailed information about a selected movie
  const fetchMovieDetails = async (id) => {
    setLoading(true);  // Set loading state to true when fetching data
    try {
      const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=fc1fef96`);
      const data = await response.json();
      setSelectedMovie(data);  // Update state with selected movie details
    } catch (error) {
      console.error('Failed to fetch movie details:', error);  // Log any errors
    } finally {
      setLoading(false);  // Set loading state to false once data is fetched
    }
  };

  // Return the relevant state and functions from the hook
  return {
    movies,
    selectedMovie,
    fetchMovies,
    fetchMovieDetails,
    loading,
  };
};

export default useMovies;
