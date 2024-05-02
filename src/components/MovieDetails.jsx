import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

function MovieDetails() {
  const { movieId } = useParams(); // Ottieni il parametro movieId dalla URL

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`http://www.omdbapi.com/?apikey=3dd63da1&i=${movieId}`);
        const data = await response.json();
        setMovieDetails(data);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <img src={movieDetails.Poster} alt={movieDetails.Title} className="img-fluid rounded" />
        </div>
        <div className="col-md-8">
          <h2 className="text-white">{movieDetails.Title}</h2>
          <p className="text-white"><strong>Plot:</strong> {movieDetails.Plot}</p>
          <p className="text-white"><strong>Director:</strong> {movieDetails.Director}</p>
          <p className="text-white"><strong>Actors:</strong> {movieDetails.Actors}</p>
          <p className="text-white"><strong>Genre:</strong> {movieDetails.Genre}</p>
          <p className="text-white"><strong>Released:</strong> {movieDetails.Released}</p>
          <p className="text-white"><strong>IMDb Rating:</strong> {movieDetails.imdbRating}</p>
          <div className="mt-3">
            <Button variant="danger" className="mr-3">
              <FontAwesomeIcon icon={faPlay} className="mr-2" /> Play
            </Button>
            <Button variant="primary">
              <FontAwesomeIcon icon={faPlus} className="mr-2" /> My List
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
