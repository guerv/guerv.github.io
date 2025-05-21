import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div id="navbar">
            <Link to="/" className="navlink homelink">
                Home
            </Link>
            <Link to="/projects" className="navlink projectslink">
                Projects
            </Link>
            <Link to="/art" className="navlink artlink">
                Art
            </Link>
            <Link to="/work" className="navlink worklink">
                WebDev Coursework
            </Link>
        </div>
    );
}

export default Navbar;
