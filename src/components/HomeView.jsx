import React from 'react';
import { Grid, Header, Icon, Image } from 'semantic-ui-react';
import ClipViewer from './ClipViewer';
import TopClipsList from './TopClipsList';
import moment from 'moment';

const HomeView = props => {
  
  const clickHandler = () => {
    props.onItemClick(props.video);
    props.history.push(`/clip/${props.video.slug}`);
  }

  if (props.video) {
    return (
      <Grid container stretched centered>
        <Grid.Row columns={2} computer={9} tablet={16} mobile={16}>
            <div id="homeview-description" as="h1">
              <Icon name="star" color="yellow" />
              Top Trending Clip Today
            </div>
        </Grid.Row>
        <Grid.Row columns={2} computer={9} tablet={16} mobile={16}>
              <ClipViewer video={props.video} />
        </Grid.Row>
        <Grid.Row columns={2} computer={9} tablet={16} mobile={16}>
              <Header id="homeview-video-title" as="h1" onClick={clickHandler}>
                {props.video.title}
              </Header>
        </Grid.Row>
        <Grid.Row centered divided className="clipview-details-row">
          <Grid.Column centered="true" width={3}>
            <span className="white-font" id="text-align-center">
              <Icon name="twitch" size="large" />
              <a href={props.video.broadcaster.channel_url}>
                {props.video.broadcaster.name}
              </a>
            </span>
          </Grid.Column>
          <Grid.Column width={3}>
            <span className="white-font" id="text-align-center">
              <Icon name="eye" color="blue" size="large" />
              {props.video.views}
            </span>
          </Grid.Column>
          <Grid.Column width={4}>
            <span className="white-font" id="text-align-center">
              <Icon name="game" color="purple" size="large" />
              {props.video.game}
            </span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row id="homeview-title" only="computer">
          Flavors of the month
        </Grid.Row>
        <Grid.Row>
          <TopClipsList {...props} videos={props.monthClips} onItemClick={props.onItemClick} />
        </Grid.Row>
        <Grid.Row />
        <Grid.Row id="homeview-title" only="computer">
          Greatest of all time
        </Grid.Row>
        <Grid.Row>
          <TopClipsList {...props} videos={props.bestClips} onItemClick={props.onItemClick} />
        </Grid.Row>
      </Grid>
    );
  } else {
    return (
      <Grid>
        <Image src="https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-637819.jpg" />
      </Grid>
    );
  }
};

export default HomeView;
