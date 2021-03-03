import React from "react";
import tileImg from "../../images/oracle_main_art.jpg"

class PlayableTile extends React.Component {
    state = {
        src: this.props.audio,
        name: this.props.name,
        id: this.props.index,
        isActive: false
    }

    handleAudio = (event) => {
        let currentAudio = event.target.lastChild;

        this.setState(prevState => {
            return {isActive: !prevState.isActive}
        })

        this.props.pauseOther(currentAudio)

        if (currentAudio.paused) {
            return currentAudio.play();

        } else {
            return currentAudio.pause();
        }
    }

    render(props) {

        const tileImgStyle = {
            maxWidth: "300px",
            height: "auto"
        };
        return (
            <div className="align marg-box">
                <figure className="track-card border-box pad-box">
                    <div className="playableTile">
                        <img style={tileImgStyle} className="playableTile-img" src={tileImg} alt=""/>
                        <div
                            onClick={(event) => {
                                this.handleAudio(event)
                            }}
                            className={this.state.isActive ? "play_pause-btn-container pointer-event-none" : "play_pause-btn-container"}
                        >
                            <button
                                className={this.state.isActive ? "play-btn play_pause-btn inactive-btn" : "play-btn play_pause-btn"}>
                                <svg viewBox="0 0 489.8 489.8" width="32px" height="32px"
                                     fill="#15edcd"
                                >
                                    <path d="M375.9,230.5L200.1,117.7c-5.3-3.4-12-3.6-17.5-0.6s-8.9,8.8-8.9,15v225.5c0,6.3,3.4,12,8.9,15c2.6,1.4,5.4,2.1,8.2,2.1
				c3.2,0,6.4-0.9,9.3-2.7l175.8-112.7c4.9-3.2,7.9-8.6,7.9-14.4C383.7,239.1,380.8,233.6,375.9,230.5z M207.9,326.3V163.5
				l126.9,81.4L207.9,326.3z"/>
                                </svg>
                            </button>
                            <button
                                className={this.state.isActive ? "pause-btn play_pause-btn active-btn" : "pause-btn play_pause-btn"}
                            >
                                <svg viewBox="0 0 512 512" width="32px" height="20px"
                                     fill="#15edcd">
                                    <path d="M169.667-1c-11.782,0-21.333,9.551-21.333,21.333v469.333c0,11.782,9.551,21.333,21.333,21.333
				c11.782,0,21.333-9.551,21.333-21.333V20.333C191,8.551,181.449-1,169.667-1z"/>
                                    <path d="M340.333-1C328.551-1,319,8.551,319,20.333v469.333c0,11.782,9.551,21.333,21.333,21.333
				c11.782,0,21.333-9.551,21.333-21.333V20.333C361.667,8.551,352.115-1,340.333-1z"/>
                                </svg>
                            </button>
                            <audio data-value={this.state.id} src={this.state.src}></audio>
                        </div>
                        <p className="track-name">{this.state.name}</p>
                    </div>
                </figure>
            </div>
        )
    }

}

export default PlayableTile;