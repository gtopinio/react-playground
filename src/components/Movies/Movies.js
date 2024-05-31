import React from 'react'
import { useState, useEffect } from 'react';
import { searchMovies } from '../../services/omdbService';
import MovieCard from '../MovieCard/MovieCard';

const Movies = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [movies, setMovies] = useState([]);


    useEffect(() => {

        fetchMovies();
    }, [searchTerm]);

    const fetchMovies = async () => {
        const response = await searchMovies('batman');
        setMovies(response);
    };

    return (
        <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for movies"
            />
            <img
                src={"/assets/search.svg"} // Already imports from public/assets
                alt="search"
                onClick={() => searchMovies(searchTerm)}
            />
        </div>

        {movies?.length > 0 ? (
            <div className="container">
            {movies.map((movie) => (
                <MovieCard key={movie.imdbID} movie={movie} />
            ))}
            </div>
        ) : (
            <div className="empty">
            <h2>No movies found</h2>
            </div>
        )}
        </div>
    )
}

export default Movies;
