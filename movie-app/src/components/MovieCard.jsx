// Movie Card Component

export function MovieCard({ movie }){

    function addToFavorites(){
        // adds movie to favorites
    }

    
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={addToFavorites}>♥</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <h4>{movie.genre}</h4>
                <p>{movie.release_date}</p>
            </div>
        </div>
    );
}