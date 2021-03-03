import React from "react";
import {Link} from "react-router-dom";




function NavBar() {
    return (
        <nav>
            <ul id="nav-bar">
                <li className="nav-links"><Link className="nav-links"  to="/">HOME</Link></li>
                <li className="nav-links"><Link className="nav-links" to="/about">ABOUT</Link></li>
                <li className="nav-links"><Link className="nav-links" to="/music">MUSIC</Link></li>
                <li className="nav-links"><Link className="nav-links" to="/media">MEDIA</Link></li>
                <li className="nav-links"><Link className="nav-links" to="/blog">BLOG</Link></li>
                <li className="nav-links"><Link className="nav-links" to="/contact">CONTACT</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar;