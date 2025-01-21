import "../assets/css/MovieCard.css"
import { FaHeart } from "react-icons/fa";

// Movie Card Component
export function MovieCard({ movie }){

    // Genres for movies
    const genreMap = {
        28: "Action",
        12: "Adventure",
        16: "Animation",
        35: "Comedy",
        80: "Crime",
        99: "Documentary",
        18: "Drama",
        10751: "Family",
        14: "Fantasy",
        36: "History",
        27: "Horror",
        10402: "Music",
        9648: "Mystery",
        10749: "Romance",
        878: "Science Fiction",
        10770: "TV Movie",
        53: "Thriller",
        10752: "War",
        37: "Western"
    };

    // Returns the first 2 genre of the genre_ids of movie object
    function mapGenres(genre_ids) {
        return genre_ids.slice(0, 2).map(id => (
            genreMap[id] || "Unknown"
        ))
    }

    function addToFavorites(){
        // adds movie to favorites
    }

    
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={addToFavorites}><FaHeart /></button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <h4>{mapGenres(movie.genre_ids).join(", ")}</h4>
                <p>{new Date(movie.release_date)
                            .toLocaleDateString('en-US', { 
                                month: 'short', 
                                day: 'numeric', 
                                year: 'numeric' }
                            )}
                </p>
            </div>
        </div>
    );
}