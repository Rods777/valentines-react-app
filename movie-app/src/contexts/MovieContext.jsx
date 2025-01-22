import { createContext, useState, useContext, useEffect } from "react";

// Context API is a way to pass data through the component tree without having to pass props down manually at every level.

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext); // lets us use the context values

export const MovieProvider = ({ children }) => {
    // Provider - Provides the state that wraps around it

    const [favorites, setFavorites] = useState([]);
    
    useEffect(() => {
        // Retrieves the favorites from the local storage and sets them if there are any

        const storedFavs = localStorage.getItem("favorites");  

        if (storedFavs) setFavorites(JSON.parse(storedFavs)); 
    }, []);

    useEffect(() => {
        // Saves the favorites to the local storage, if there are any
        localStorage.setItem("favorites", JSON.stringify(favorites)); // Converts the parsed JSON into string
    }, [favorites]);

    const addToFavorites = (movie) => {
        // Adds a movie to the favorites state
        setFavorites((prev) => [...prev, movie]);
    }

    const removeFromFavorites = (movieId) => {
        // Removes a movie within the favorites state
        setFavorites((prev) => prev.filter(movie => movie.id !== movieId))
    }

    const isFavorite = (movieId) => {
        // Check if a movie is favorite
        return favorites.some((movie) => movie.id === movieId)
    }

    const values = {
        // values to be passed in provider to children
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite
    }

    return (
        <MovieContext.Provider value={values}>
            { children }
        </MovieContext.Provider>
    );
}