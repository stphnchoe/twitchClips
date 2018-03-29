import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import VideoList from './components/VideoList';
import { clips } from './exampleData/exampleData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: clips,
    };
  }

  render() {
    return (
      <div>
        <NavBar />
        <h1>Twitch Clips App</h1>
        <Route path="/browse" render={props => (
          <VideoList videos={this.state.videos} />
        )}/>
      </div>
    );
  }
}

export default App;
