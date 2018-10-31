import React, { Component } from 'react';

class SongDetails extends Component {
    render() {
        //console.log(this.props)
        let song = this.props.songs[this.props.match.params.songId];
        let { artist, title, album, description } = song;
        //console.log(song)
        return (
            <div>
                <ul className>
                    <div className="page-details">
                        <h4>Artist: {song.artist}</h4>
                        <h4>Track: {song.title}</h4>
                        <h4>Album: {song.album}</h4>
                        <p>Quote: <span className="quote"> "{song.description}" </span></p>
                    </div>

                </ul>
            </div>
        )
    }
}

export default SongDetails;