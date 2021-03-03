import React from "react";
import Header from "./header/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./homePage/Home";
import About from "./aboutPage/About";
import Music from "./musicPage/Music";
import Media from "./mediaPage/Media";
import Blog from "./blogPage/Blog";
import Contact from "./contactPage/Contact";
import Calculator from "./calculator/Calculator";



function App() {
    return (
        <Router>
            <div id="wrapper">
                <Header/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/about" exact component={About}/>
                    <Route path="/music" exact component={Music}/>
                    <Route path="/media" exact component={Media}/>
                    <Route path="/blog" exact component={Blog}/>
                    <Route path="/contact" exact component={Contact}/>
                    <Route path="/calculator" exact component={Calculator}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
