import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import VideoList from './components/VideoList';
import TimePeriodsBar from './components/TimePeriodsBar';
import ClipsView from './components/ClipsView.jsx';
import { clips } from './exampleData/exampleData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: clips,
      video: clips[0],
    };
    this.onVideoItemClick = this.onVideoItemClick.bind(this);
  }

  onVideoItemClick(video) {
    this.setState({
      video,
    });
  }

  render() {
    return (
      <div>
        <NavBar />
        <Route path="/browse" render={props => (
          <div>
            <TimePeriodsBar />
            <div>
              <span className='app-clips-title'>
                Popular Twitch Clips
              </span>
            </div>
            <VideoList {...props} videos={this.state.videos} onItemClick={this.onVideoItemClick}/>
          </div>    
        )}/>
        <Route path="/clip" render={props => (
          <div>
            <ClipsView {...props} video={this.state.video} />
          </div>
        )}/>
      </div>
    );
  }
}

export default App;
