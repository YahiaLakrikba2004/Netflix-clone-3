import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

const Movies = ({ movies }) => {
    const moviesPerRow = 5;
    const items = [];

    for (let i = 0; i < movies.length; i += moviesPerRow) {
        const movieGroup = movies.slice(i, i + moviesPerRow);

        items.push(
            <Carousel.Item key={i} className="movie-carousel-item movieCarousel">
                <div className="d-flex justify-content-between movieCarousel">
                    {movieGroup.map((movie, index) => (
                        <div key={index} className="movie-poster-container">
                            {/* Aggiungi Link attorno all'immagine per reindirizzare ai dettagli del film */}
                            <Link to={`/movie-details/${movie.imdbID}`}>
                                <img
                                    src={movie.Poster}
                                    alt={movie.Title}
                                    className="movie-poster"
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </Carousel.Item>
        );
    }

    return (
        <Carousel interval={null} className="movieCarousel">
            {items}
        </Carousel>
    );
};

export default Movies;
