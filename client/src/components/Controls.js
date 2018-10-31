import React, { Component } from 'react'

// The controls component will house the control icons
// Controls get two props: playing and handleClick (to pass down the handle click function from AudioPlayer)
// onClick will call the handleClick function. The id of each button will affect how handleClick handled so I can use one function for all click handlers

export default class Controls extends Component {
    render() {
        //pulling current song out of song list
        let song = this.props.songs[this.props.currentSongIndex]
        //pulling specific info from that one song
        //object deconstruction
        let { index, title, id, source, description } = song
        //console.log(song)
        return (
            <div className="controls-page">

                {/* Prev icon */}
                <i
                    id="previous"
                    onClick={() => this.props.handleClick('previous')}
                    className="glyphicon glyphicon-step-backward">
                </i>
                &emsp;
                {/* Play icon */}
                {!this.props.isPlaying &&
                    <i
                        id="playlist"
                        onClick={() => this.props.handleClick('play')}
                        className="glyphicon glyphicon-play-circle">
                    </i>}
                &emsp;
                {/* Pause icon */}
                {this.props.isPlaying &&
                    <i
                        id="pause"
                        onClick={() => this.props.handleClick('pause')}
                        className="glyphicon glyphicon-pause">
                    </i>}
                &emsp;
                {/* Next icon */}
                <i
                    id="next"
                    onClick={() => this.props.handleClick('next')}
                    className="	glyphicon glyphicon-step-forward">
                </i>
                {/* Shuffle icon */}
                <i
                    id="shuffle"
                    onClick={() => this.props.handleClick('shuffle')}
                    className="glyphicon glyphicon-random">
                </i>
            </div>
        )
    }
}




