import React, { Component } from 'react';
import AudioPlayer from './components/AudioPlayer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <AudioPlayer 
        songs={this.props.songs}
        />
      </div>

    );
  }
}

export default App;
