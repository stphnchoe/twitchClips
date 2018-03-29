import React from 'react';
import { Grid, Icon } from 'semantic-ui-react';
import moment from 'moment';

const ClipsView = ({ video }) => (
  <Grid stretched columns={16}>
    <Grid.Column computer={3} tablet={1} mobile={1} />
    <Grid.Column computer={10} tablet={16} mobile={16}>
      <Grid.Row>
        <Grid.Column computer={13} tablet={16} mobile={16}>
          <h2>{video.title}</h2>
          <iframe src={video.embed_url} height="480px" width="90%" align="middle" frameBorder='0' scrolling='no' allowFullScreen='true' />
          <div>
            <div className="clipview-broadcaster">
              <Icon name="twitch" size="large" />
              <a href={video.broadcaster.channel_url}>
                {video.broadcaster.name}
              </a>
              <span className="float-right">
                <Icon name="game" color="purple" />
                {video.game}
              </span>
            </div>
              <Icon name="eye" color="blue" />
              {video.views}
              <Icon name="clock" />
            {moment(video.created_at).fromNow()}
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid.Column>
  </Grid>
);

export default ClipsView;
