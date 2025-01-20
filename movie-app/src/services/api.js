const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    // sends a request to fetch popular movies
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    // to display in the console the JSON data efficiently
    console.dir(data.results, 
        { depth: null, colors: true }
    );
    return data.results
};

export const searchForMovies = async (query) => {
    // sends a request to fetch searched movie
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
        )}`
    );
    const data = await response.json();
    // to display in the console the JSON data efficiently
    console.dir(data.results, 
        { depth: null, colors: true }
    );
    return data.results
};