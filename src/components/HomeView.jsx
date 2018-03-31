import React from 'react';
import { Grid, Header, Icon } from 'semantic-ui-react';
import ClipViewer from './ClipViewer';
import moment from 'moment';

const HomeView = props => {

  const clickHandler = () => {
    props.onItemClick(props.video);
    props.history.push(`/clip/${props.video.slug}`);
  }

  return (
    <Grid container stretched centered>
      <Grid.Column columns={2} computer={10} tablet={16} mobile={16}>
        <Grid.Row computer={16} tablet={16} mobile={16}>
          <Header id="homeview-title" as="h1" color="white">
            <Icon name="star" color="yellow" size="large" />
            Top Trending Clip Today
          </Header>
          <ClipViewer video={props.video} />
          <br/>
          <Grid.Column>
            <Header id="homeview-title" as="h1" onClick={clickHandler}>
              {props.video.title}
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid.Column>
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
    </Grid>
  );
};

export default HomeView;
