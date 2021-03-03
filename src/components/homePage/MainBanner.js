import React from "react";
import banner from "../../images/banner-img.jpg";

function MainBanner(){
    const imgStyle = {
        maxWidth: "1700px",
        height: "auto"
    };
    return(
        <div id="main-banner-container">
            <img src={banner} style={imgStyle}  alt=""/>
        </div>
    )
}


export default MainBanner