import React from 'react';
import { Grid, Icon, Image } from 'semantic-ui-react';
import ClipViewer from './ClipViewer';
import CommentsList from './CommentsList';
import moment from 'moment';

const ClipsView = ({ video, videoComments, addComment }) => {
  if (video) {
    return (
      <Grid padded>
        <Grid.Row centered>
          <Grid.Column>
            <h1 className="clipview-title">{video.title}</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={11} >
            <ClipViewer video={video} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered divided className="clipview-details-row">
          <Grid.Column centered width={3}>
            <span id="text-align-center">
              <Icon name="twitch" size="large" color="purple" />
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
          <Grid.Column width={3}>
            <span className="white-font" id="text-align-center">
              <Icon name="game" color="purple" size="large" />
              {video.game}
            </span>
          </Grid.Column>
          <Grid.Column width={2} size="large">
            <span className="grey-font">
              <Icon name="clock" color="grey"/>
              {moment(video.created_at).fromNow()}
            </span>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row />
        <Grid.Row columns={3}>
          <Grid.Column width={5}/>
          <Grid.Column>
            <CommentsList videoComments={videoComments} addComment={addComment} />
          </Grid.Column>
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
}

export default ClipsView;
