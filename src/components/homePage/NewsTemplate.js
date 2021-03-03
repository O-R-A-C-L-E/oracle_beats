import React from "react";
import {Link} from "react-router-dom";


function NewsTemplate(props){
    const img = props.data.imgUrl
    return(
            <div className="news-box marg-box pad-box border-box">
                <h3 className="pad-box">{props.data.title}</h3>
                <div className="news-box-content">
                    <img src={img} alt="" />
                    <div className="description">
                        <p>{props.data.description}</p>
                        <button className="news-btn"><Link className="news-btn-link" to={props.data.link}>Content!</Link></button>
                    </div>
                </div>
            </div>
    )
}

export default NewsTemplate;