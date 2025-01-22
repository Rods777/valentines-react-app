import "../assets/css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import { MovieCard } from "../components/MovieCard";

export function Favorites(){
    const { favorites } = useMovieContext();

    return (
        <>
             {/* Conditional Rendering whenever there is a favorites or none */}
            {favorites.length > 0 ? ( 
                <div className="favorites">
                    <h2>Favorites</h2>
                    <div className="movies-container">
                        {/* Iterates and display all the favorites */}
                        {favorites.map((movie) => (
                                // Displays all the favorite movies
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