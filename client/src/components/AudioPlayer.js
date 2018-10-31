import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Controls from './Controls'
import SongDetails from './SongDetails';
import SongsList from './SongsList';
import NowPlaying from './NowPlaying';

//the state of my song list lives in the AudioPlayer component
//Props will be passed to three children components
//1. Controls
//2. SongList
//3. SongDetails
export default class AudioPlayer extends Component {
    state = {
        isPlaying: false,
        currentSongIndex: 0,
    }

    // Create a new variable name that uses reactCreateRef (the new way to ref)
    audioPlayer = React.createRef();

    handleClickList = (index) => {
        this.setState({ currentSongIndex: index, isPlaying: true }, () => { this.audioPlayer.current.play() });
    }
    handleClickPause = (index) => {
        this.setState({ currentSongIndex: index, isPlaying: false }, () => { this.audioPlayer.current.pause() });
    }

    componentDidMount() {
        axios.get('/songs')
            .then(res => {
                this.setState({
                    song: res.data
                })
            })
            .catch(err => {
            })
    }

    // Switch statements - evaluate its expression, looks for the first *case* whose expression evaluates to the same value as the resilt of the input expression (source: mdn) using === comparison then transfers control to that clause and executes its statements.  *Note* if more than one statement evaulates to be true Switch will take the first one to be true (might need to use === && to deal with this?). Add a default clause in case no matchin case (haha) is found. Add a break after each case to make sure program breaks when case is matched.
    // Use switch case logic and the unique id name given to the buttons to match the case expression

    handleClick = (id) => {
        //console.log(id)
        //console.log(currentSong)
        switch (id) {
            case "play":
                this.setState({ isPlaying: true }, () => { this.audioPlayer.current.play() });
                break;
            case "pause":
                this.setState({ isPlaying: false },
                    () => { this.audioPlayer.current.pause() })
                break;
            case "next":
                let nextSong = this.state.currentSongIndex;
                let isPlaying = this.state.isPlaying;
                //console.log(isPlaying)
                // Condition to loop to first song at end of track list
                // If next song is at the last point in the array reset the state of currentSongIndex to 0.
                if (nextSong === this.props.songs.length -1) {
                    this.setState({ currentSongIndex: 0 }, () => {
                        this.audioPlayer.current.play()
                    })
                // Condition to skip track forward and stay paused if initial isPlaying state is false
                } else if (nextSong && isPlaying === false) {
                    this.setState({ currentSongIndex: this.state.currentSongIndex + 1 }, () => { this.audioPlayer.current.pause() })
                    //break;
                }
                // Condition to skip track forward and play if initial isPlaying state is true
                else {
                    this.setState({ currentSongIndex: this.state.currentSongIndex + 1 }, () => { this.audioPlayer.current.pause() })
                    //console.log(currentSongIndex)
                }
                break;
            case "previous":
                let prevSong = this.state.currentSongIndex;
                let prevPlaying = this.state.isPlaying;
                //condition to loop to first song at end of track list
                if (prevSong === 0) {
                    this.setState({ currentSongIndex: this.props.songs.length - 1 })
                // Condition to skip track forward and stay paused if initial isPlaying state is false
                } else if (prevSong && prevPlaying === false) {
                    this.setState({ currentSongIndex: this.state.currentSongIndex - 1 }, () => { this.audioPlayer.current.pause() })
                    //break;
                }
                // Condition to skip track forward and play if initial isPlaying state is on true
                else {
                    this.setState({ currentSongIndex: this.state.currentSongIndex - 1 }, () => { this.audioPlayer.current.play() })
                    //console.log(prevSong)
                }
                break;
            // The Fisher-Yates algorithm picks one random element from an array and then excludes it from the next loop
            // Works by swapping the picked element with the current element and then picking the next random element from the remainder
              case "shuffle": 
              let randomIndex = Math.floor(Math.random() * this.props.songs.length)
              //console.log(randomIndex)
              //set currentIndex to new randomIndex, this will play automatically
              this.setState({currentSongIndex : randomIndex, isPlaying: true }, ()=> {
                  this.audioPlayer.current.play() })
        }
    }

    render() {
        //console.log(this.props.songs)
        return (
            <div className="site-wrapper">
                <div class="welcome"> <h3>React Audio Player ft. Beyoncé</h3> </div>

                <div class="controls">
                    <Controls
                        currentSongIndex={this.state.currentSongIndex}
                        isPlaying={this.state.isPlaying}
                        songs={this.props.songs}
                        handleClick={this.handleClick}
                    />
                </div>

                <div className="now-playing">
                    <NowPlaying
                        currentSongIndex={this.state.currentSongIndex}
                        songs={this.props.songs} />
                </div>

                <div class="list">

                    <Route path="/"
                        render={(props) =>
                            <SongsList
                                {...props}
                                songs={this.props.songs}
                                currentSongIndex={this.state.currentSongIndex}
                                isPlaying={this.state.isPlaying}
                                handleClickList={this.handleClickList}
                                handleClickPause={this.handleClickPause}
                            />
                        } />
                </div>

                <div class="details">
                    <Route path='/songs/:songId'
                        render={(props) =>
                            <SongDetails
                                {...props}
                                songs={this.props.songs}
                                playSong={this.playSong}
                                currentSongIndex={this.state.currentSongIndex}
                                isPlaying={this.state.isPlaying}
                                handleClickList={this.handleClickList}
                            />}
                    />

                </div>

                {/* ref allows us to reference the audio DOM element (to play audio) using the underlying dom element as the argument. This function will be called every time the AudioPlayer component renders, updating the song. Pass to child components in handleClick function (eg. this.audio.play/this.audio.pause). Adding the id="audio" worked, I'm not 100% sure why... */}

                <audio id="audio" ref={this.audioPlayer} src={(this.props.songs[this.state.currentSongIndex].source)} />

                {/* <audio id="audio" ref={(audio)=>{this.audioPlayer=audio}} src={(this.props.currentSongIndex)} /> */}

            </div>

        );
    }
}