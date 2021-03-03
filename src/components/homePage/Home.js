import React from "react";
import MainBanner from "./MainBanner";
import LastActivityArticle from "./LastActivityArticle";
import NewsSection from "./NewsSection";

function Home(){

    return(
        <section id="page-content">
            <MainBanner/>
            <LastActivityArticle/>
            <NewsSection/>


        </section>
    )
}

export default Home;