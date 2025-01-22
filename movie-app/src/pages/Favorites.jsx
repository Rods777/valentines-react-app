import "../assets/css/Favorites.css";
import { useState } from "react";
import { useMovieContext } from "../contexts/MovieContext";
import { FaSearch } from "react-icons/fa";
import { MovieCard } from "../components/MovieCard";

export function Favorites(){
    const { favorites } = useMovieContext();
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <>
             {/* Conditional Rendering whenever there is a favorites or none */}
            {favorites.length > 0 ? (
                <div className="favorites">
                    <h2>Favorites</h2>
                    <form className="search-container">
                        <div className="search-form">
                            <FaSearch className="search-icon"/>
                            <input
                                type="text"
                                className="search-input" 
                                placeholder="Search for favorites..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </form>
                    <div className="movies-container">
                        {/* Iterates and display all the favorites */}
                        {favorites.map((movie) => (
                                // Conditional Rendering for the search query  
                                movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) &&
                                // Displays the favorite movies
                                <MovieCard movie={movie} key={movie.id}/>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="favorites-empty">
                    <h2>No Favorite Movies Yet</h2>
                    <p>Start adding movies to your favorites and they will appear here!</p>
                </div>
            )}
        </>
    );
}