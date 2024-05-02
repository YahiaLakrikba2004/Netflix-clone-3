import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails'; // Importa il componente MovieDetails
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer';
import TVShows from './components/TvShowsPage';

function App() {
  const [moviesLOTR, setMoviesLOTR] = useState([]); 
  const [moviesPirates, setMoviesPirates] = useState([]); 
  const [moviesHungerGames, setMoviesHungerGames] = useState([]); 

  const getMoviesLOTR = async () => {
    const urlSeriesLOTR = 'https://www.omdbapi.com/?apikey=3dd63da1&s=lord of the rings&type=movie';
    const response = await fetch(urlSeriesLOTR);
    const responseJson = await response.json();
    setMoviesLOTR(responseJson.Search);
  };

  useEffect(() => {
    getMoviesLOTR();
  }, []);

  const getMoviesPirates = async () => {
    const urlSeriesPirates = 'https://www.omdbapi.com/?apikey=3dd63da1&s=pirates of the caribbean&type=movie';
    const response = await fetch(urlSeriesPirates);
    const responseJson = await response.json();
    setMoviesPirates(responseJson.Search);
  };

  useEffect(() => {
    getMoviesPirates();
  }, []);

  const getMoviesHungerGames = async () => {
    const urlSeriesHungerGames = 'https://www.omdbapi.com/?apikey=3dd63da1&s=hunger games&type=movie';
    const response = await fetch(urlSeriesHungerGames);
    const responseJson = await response.json();
    setMoviesHungerGames(responseJson.Search);
  };

  useEffect(() => {
    getMoviesHungerGames();
  }, []);

  return (
    <Router>
      <div>
        <NavBar />
        
        <Routes>
          <Route path="/" element={<Home moviesLOTR={moviesLOTR} moviesPirates={moviesPirates} moviesHungerGames={moviesHungerGames} />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/movie-details/:movieId" element={<MovieDetails />} /> {/* Nuova route per i dettagli del film */}
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

function Home({ moviesLOTR, moviesPirates, moviesHungerGames }) {
  return (
    <>
      <h2>Trending Now</h2>
      <div className='gallery'>
        <Movies movies={moviesLOTR} />
      </div>

      <h2>Watch it Again</h2>
      <div className='gallery'>
        <Movies movies={moviesPirates} />
      </div>

      <h2>New Releases</h2>
      <div className='gallery'>
        <Movies movies={moviesHungerGames} />
      </div>




    </>
  );
}

export default App;
