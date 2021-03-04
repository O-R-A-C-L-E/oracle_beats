import React from "react";
import PlayableTile from "./PlayableTile";

class LastActivityArticle extends React.Component {
    state = {
        audioData: [],
    }

    componentDidMount() {
        fetch('../AudioData.json')
            .then((res) => res.json())
            .then((data) => this.setState({audioData: data}))
            .catch((error) => alert("Can not receive data" + error))
    }

    pauseOtherAudio =(currentAudio) =>{
        let allAudio = document.querySelectorAll("[data-player]")

        allAudio.forEach(audio =>{
            if (!audio.paused && audio !== currentAudio){
                audio.pause();
                audio.currentTime = 0;
            }
        })
    }
    render() {

        const Tile = this.state.audioData.map((item) => {
            return <PlayableTile
                pauseOther={this.pauseOtherAudio}
                key={item.id}
                index={item.id}
                audio={item.src}
                name={item.name}
            />
        })
        return (
            <article id="last-activity pad-box marg-box">
                <h1 className="title article-title pad-box marg-box">LAST RELEASES</h1>
                <div id="tracks">
                    {Tile}
                </div>
            </article>
        )
    }


}

export default LastActivityArticle;