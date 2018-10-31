import React, { Component } from 'react';

export default class NowPlaying extends Component {
    render () {
        //console.log(this.props)
        // This.props.songs -> defines the array
        // This.props.currentSongIndex says I want the CURRENT INDEX in the array
        let currentSong = this.props.songs[this.props.currentSongIndex]

        // currentSong console.log reveals the details available for that song
        // Use currentSong.(title, details, album, artist etc) to access that variable and return it like below
        //console.log(currentSong)
       
        return (
            <div className="now-playing">
                <p>{currentSong.artist}  : &nbsp; {currentSong.title}</p>
            </div>
        
        )
    }
}