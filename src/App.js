import React, { Component } from 'react';
import NavBar from './components/NavBar';
import VideoList from './components/VideoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>Twitch Clips App</h1>
        <VideoList />
      </div>
    );
  }
}

export default App;
