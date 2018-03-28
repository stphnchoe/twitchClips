import React, { Component } from 'react';
import VideoList from './components/VideoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Twitch Clips App</h1>
        <VideoList />
      </div>
    );
  }
}

export default App;
