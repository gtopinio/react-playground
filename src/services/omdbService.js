import axios from "axios"

const OMDB_API_URL = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API_KEY}`

export const searchMovies = async (searchTerm) => {
    console.log('searching for movies with term:', searchTerm);
    const response = await axios.get(`${OMDB_API_URL}&s=${searchTerm}`);
    const movieData = response.data.Search;
    return movieData
}