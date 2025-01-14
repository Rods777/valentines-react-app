import { Link } from "react-router-dom";

export function NavBar(){
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                {/* The Link component acts like <a><a/> */}
                <Link to="/">Movie Vault</Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/favorites" className="navbar-link">Favorites</Link>
            </div>
        </nav>
    );
}