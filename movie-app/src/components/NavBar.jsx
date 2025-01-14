import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "../assets/css/NavBar.css"

export function NavBar(){
    return (
        <nav className="navbar">
            <input type="checkbox" id="check"/>
            <label className="menu-bar-container" for="check">
                <FaBars className="menu-bar"/>
            </label>
            
            <div className="navbar-brand">
                {/* The Link component acts like <a><a/> */}
                <Link to="/" className="navbar-brand-logo">
                    <span className="navbar-logo-movie">Movie</span>Vault
                </Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/favorites" className="navbar-link">Favorites</Link>
            </div>
        </nav>
    );
}