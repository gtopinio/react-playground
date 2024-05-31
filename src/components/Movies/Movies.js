import React from 'react'
import { useState, useEffect } from 'react';
import { searchMovies } from '../../services/omdbService';
import MovieCard from '../MovieCard/MovieCard';

const Movies = () => {
    const [clickSearch, setClickSearch] = useState(0);
    const [searchTerm, setSearchTerm] = useState("");
    const [initTerm, setInitTerm] = useState("Lego");
    const [movies, setMovies] = useState([]);


    useEffect(() => {
        fetchMovies();
    }, [clickSearch]);

    const fetchMovies = async () => {
        if (clickSearch === 0) {
            const response = await searchMovies(initTerm);
            setMovies(response);
            return;
        }

        const response = await searchMovies(searchTerm);
        setMovies(response);
    };

    const clickSearchMovies = async () => {
        if (searchTerm === "") {
            return;
        }
        fetchMovies();
        setClickSearch(clickSearch + 1);
    };

    return (
        <div className="app">
        <h1>FilmFolio</h1>

        <div className="search">
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for movies"
            />
            <img
                src={"/assets/search.svg"} // Already imports from public/assets
                alt="search"
                onClick={() => clickSearchMovies()}
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
