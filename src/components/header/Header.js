import React from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";
import Hamburger from "./Hamburger";


function Header() {

    return (
        <header>
            <NavBar/>
            <Logo/>
            <Hamburger/>
        </header>
    )
}

export default Header;