import { useState } from "react";
import { MovieCard } from "../components/MovieCard";

// Home page of the Movie Vault

export function Home(){
    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        {id: 1, title: "Bok", genre: "Action", release_date: "2020"},
        {id: 2, title: "Bok2", genre: "Comedy", release_date: "2020"},
        {id: 3, title: "Bok3", genre: "Drama", release_date: "2020"},
    ];

    function searchMovie(event){
        event.preventDefault()
        setSearchQuery("") // Make the search field empty after searching
    }

    return (
        <div className="home">
            <form onSubmit={searchMovie} className="search-form">
                <input 
                    type="text"
                    placeholder="Search for movies..."
                    className="search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)} // enables the search field (search state) to edit
                />
                <button type="submit" className="search-button">Search</button>
            </form>

            <div className="movies-container">
                {/* Iterates and display all the movies */}
                {movies.map(
                    (movie) => (
                        // Displays the search movie, else display all the movies
                        // Uses Conditional Rendering for search
                        movie.title.toLowerCase().startsWith(searchQuery) && 
                        <MovieCard movie={movie} key={movie.id}/>
                ))}
            </div>
        </div>
    );
}