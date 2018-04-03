import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import NavBar from './components/NavBar';
import VideoList from './components/VideoList';
import DurationsBar from './components/DurationsBar';
import ClipsView from './components/ClipsView';
import HomeView from './components/HomeView';
import { clips } from './exampleData';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeDuration: 'Week',
      browseVideos: [],
      homeClip: null,
      monthClips: [],
      video: null,
    };
    this.cache = [];
    this.onDurationClick = this.onDurationClick.bind(this);
    this.onVideoItemClick = this.onVideoItemClick.bind(this);
  }

  componentDidMount() {
    axios.get('/.netlify/functions/handler')
      .then(response => {
        this.cache = response.data;
        this.setState({
          activeDuration: 'Week',
          homeClip: response.data[0],
          browseVideos: response.data.slice(100,200),
          monthClips: response.data.slice(200,300),
          video: response.data[0],
        })
      })
      .catch(error => console.log('ERROR! ', error));
  }

  onVideoItemClick(video) {
    this.setState({
      video,
    });
  }

  onDurationClick(duration) {
    let durationVideos = [];
    if (duration === 'Day') {
      durationVideos = this.cache.slice(0,100);
    } else if (duration === 'Week') {
      durationVideos = this.cache.slice(100,200);
    } else if (duration === 'Month') {
      durationVideos = this.state.monthClips;
    } else if (duration === 'All Time') {
      durationVideos = this.cache.slice(300,400);
    }
    this.setState({
      activeDuration: duration,
      browseVideos: durationVideos, 
    });
  }

  render() {
    return (
      <div id="primary-background-image">
        <NavBar />
        <Route path="/browse" render={props => (
          <div>
            <DurationsBar onDurationClick={this.onDurationClick} activeDuration={this.state.activeDuration} />
            <VideoList {...props} browseVideos={this.state.browseVideos} onItemClick={this.onVideoItemClick} />
          </div>
        )}/>
        <Route path="/clip" render={props => (
          <div className="app-route-clip-div" id="tertiary-background-image">
            <ClipsView {...props} video={this.state.video} />
          </div>
        )}/>
        <Route exact path="/" render={props => (
          <div className="app-route-clip-div">
            <HomeView {...props} video={this.state.homeClip} onItemClick={this.onVideoItemClick} monthClips={this.state.monthClips.slice(0,5)} />
          </div>
        )}/>
      </div>
    );
  }
}

export default App;
