import React from "react";
import NewsTemplate from "./NewsTemplate";




class NewsSection extends React.Component {
    state ={
        NewsData: []
    };

    componentDidMount() {
        fetch('../NewsData.json')
            .then((res) => res.json())
            .then((data) => this.setState({NewsData: data}))
            .catch(error => alert("Something went wrong! Can't receive data" + error));
    }
    render(props) {
        let oddNewsData = [];
        let evenNewsData = [];

        let rightFilteredNews = [];
        let leftFilteredNews = [];
        this.state.NewsData.forEach((item) => {
            if ((item.id % 2) === 0) {
                evenNewsData.push(item)
                return rightFilteredNews = evenNewsData.map((item) => {return <NewsTemplate key={item.id} data={item}/>})
            } else {
                oddNewsData.push(item)
                return leftFilteredNews = oddNewsData.map((item) => {return <NewsTemplate key={item.id} data={item}/>})
            }
        })

        return (
            <div className="news pad-box marg-box border-box">
                <h1 className="title news-title pad-box">NEWS</h1>

                <div className="news-columns marg-box">
                    <aside className="column pad-box">
                        {leftFilteredNews}
                    </aside>
                    <aside className="column pad-box">
                        {rightFilteredNews}
                    </aside>

                </div>


            </div>
        )
    }

}

export default NewsSection;