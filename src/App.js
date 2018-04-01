import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar';
import VideoList from './components/VideoList';
import TimePeriodsBar from './components/TimePeriodsBar';
import ClipsView from './components/ClipsView';
import HomeView from './components/HomeView';
import { clips } from './exampleData/exampleData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      video: {},
    };
    this.onVideoItemClick = this.onVideoItemClick.bind(this);
  }

  componentDidMount() {
    axios.get('/.netlify/functions/handler')
      .then(response => {
        this.setState({
          videos: response.data.clips,
          video: response.data.clips[0],
        })
      })
      .catch(error => (console.log('ERROR! ', error)));
  }

  onVideoItemClick(video) {
    this.setState({
      video,
    });
  }

  render() {
    return (
      <div id="primary-background-image">
        <NavBar />
        <Route path="/browse" render={props => (
          <div id="secondary-background-image">
            <TimePeriodsBar />
            <VideoList {...props} videos={this.state.videos} onItemClick={this.onVideoItemClick}/>
          </div>
        )}/>
        <Route path="/clip" render={props => (
          <div className="app-route-clip-div" id="tertiary-background-image">
            <ClipsView video={this.state.video} />
          </div>
        )}/>
        <Route exact path="/" render={props => (
          <div className="app-route-clip-div">
            <HomeView {...props} video={this.state.video} onItemClick={this.onVideoItemClick} />
          </div>
        )}/>
      </div>
    );
  }
}

export default App;
