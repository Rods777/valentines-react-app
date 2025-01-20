import { useState, useEffect } from "react";
import { MovieCard } from "../components/MovieCard";
import { FaSearch } from "react-icons/fa";
import { searchForMovies, getPopularMovies } from "../services/api";
import "../assets/css/Home.css"

// Home page of the Movie Vault

export function Home(){
    const [searchQuery, setSearchQuery] = useState(""); 
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // retrieves and load the popular movies ONCE
        const loadPopularMovies = async() => {
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.error(err);
                setError("Failed to load movies...")
            } finally {
                setLoading(false)
            }
        };

        loadPopularMovies();
    }, []); // The [] is called dependency. If it's empty, the useEffect will run once

    function searchMovie(event){
        event.preventDefault() // Prevents the components to re-render/load
        setSearchQuery("") // Make the search field empty after searching
    }

    return (
        <div className="home">
            <form onSubmit={searchMovie} className="search-container">
                <div className="search-form">
                    <FaSearch className="search-icon"/>
                    <input 
                        type="text"
                        placeholder="Search for movies..."
                        className="search-input"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} // enables the search field (search state) to edit
                    />
                </div>
                
            </form>

            {/* Conditional Rendering */}

            {error && <div className="error-message">{error}</div>} {/* Only diplay when error occurs */}
            
            { loading ? (<div className="loading">Loading...</div>) /* Display a loading message until data has been fetched */
                : ( <div className="movies-container">
                        {/* Iterates and display all the movies */}
                        {movies.map(
                            (movie) => (
                                // Displays the search movie, else display all the movies
                                // Uses Conditional Rendering for search
                                movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()) && 
                                <MovieCard movie={movie} key={movie.id}/>
                            )
                        )}
                    </div>)
            }
        </div>
    );
}