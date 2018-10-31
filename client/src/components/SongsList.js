import React, { Component } from 'react';
import Controls from './Controls';
import { Link, Route, Switch } from 'react-router-dom';
import SongDetails from './SongDetails';

export default class SongsList extends Component {

    render() {
        //console.log(this.props)
        const { match } = this.props;
        return (
            <div>
                <div className="container">
                    <div className="playlist">
                        <ul className="list-unstyled">
                            {this.props.songs.map((song, index) => {
                                return (
                                    <li className="list-item">
                                        <div className="list">
                                            <div className="play-button">
                                                <h4 className="glyph">
                                                    {!this.props.isPlaying &&
                                                        <i
                                                            id="playlist"
                                                            onClick={() => this.props.handleClickList(index)}
                                                            className="glyphicon glyphicon-play-circle">
                                                        </i>}
                                                    {this.props.isPlaying &&
                                                        <i
                                                            id="pause"
                                                            onClick={() => this.props.handleClickPause(index)}
                                                            className="glyphicon glyphicon-pause">
                                                        </i>}
                                                </h4>
                                            </div>
                                            {/*  match.url means '/' but need /'songs' */}
                                            {/* Check the console.log on line 6 and look at the match params */}
                                            <Link
                                                className="link"
                                                to={`${match.url}songs/${index}`}>
                                                <p>{song.artist} : &emsp; {song.title}</p>
                                            </Link>

                                            {/* Trying to link my details page so that when I click play the details page renders next to the list */}
                                            {/* use route params to make specific song show aka match url */}
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="details">
                    <Switch>
                        {this.props.songs.map(song => (
                            <Route
                                path={`${match.url}/${song}`}
                                render={(props) => (
                                    <SongDetails
                                        {...props}
                                        {...song}
                                    />
                                )}
                            />
                        ))}
                    </Switch>

                </div>
            </div>
        )
    }
}



