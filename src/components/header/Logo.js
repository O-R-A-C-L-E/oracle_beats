import React from "react";
import {Link} from "react-router-dom";
import logo from "../../images/logo.jpg"


function Logo() {
    const imgStyle = {
        maxWidth: "1000px",
        height:"auto"
    }
    return (
        <div id="logo" className="marg-box">
            <Link to="/"><img style={imgStyle} src={logo} alt=""/> </Link>
        </div>
    )
}

export default Logo;