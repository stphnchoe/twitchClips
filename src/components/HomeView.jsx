import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import ClipViewer from './ClipViewer';
import moment from 'moment';

const HomeView = ({ video }) => (
  <Grid container stretched centered>
    <Grid.Column columns={2} computer={10} tablet={16} mobile={16}>
      <Grid.Row computer={16} tablet={16} mobile={16}>
        <ClipViewer video={video} />
        <Grid.Column>
          <div className="white-font">
            <h1 className="change-font">{video.title}</h1>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid.Column>
    <Grid.Row centered divided className="clipview-details-row">
      <Grid.Column centered width={3}>
        <span className="white-font" id="text-align-center">
          <Icon name="twitch" size="large" />
          <a href={video.broadcaster.channel_url}>
            {video.broadcaster.name}
          </a>
        </span>
      </Grid.Column>
      <Grid.Column width={3}>
        <span className="white-font" id="text-align-center">
          <Icon name="eye" color="blue" size="large" />
          {video.views}
        </span>
      </Grid.Column>
      <Grid.Column width={4}>
        <span className="white-font" id="text-align-center">
          <Icon name="game" color="purple" size="large" />
          {video.game}
        </span>
      </Grid.Column>
    </Grid.Row> 
  </Grid>
);

export default HomeView;
