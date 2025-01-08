// Movie Card Component

export default function MovieCard({ movie }){

    function addToFavorites(){

    }

    
    return (<div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title}/>
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={addToFavorites}>♥</button>
            </div>
        </div>
    </div>);
}