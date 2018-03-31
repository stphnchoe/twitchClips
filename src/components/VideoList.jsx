import React from 'react';
import { Grid } from 'semantic-ui-react';
import VideoListItem from './VideoListItem';

const VideoList = props => (
  <div>
    <span className='videolist-clips-title'>
      Popular Twitch Clips
    </span>
    <Grid centered columns={6}>
      {props.videos.map((video) => {
        return (
          <Grid.Column stretched computer={3} tablet={5} mobile={16} key={video.slug}>
            <VideoListItem {...props} video={video} onItemClick={props.onItemClick} />
          </Grid.Column>
          );
      })}
    </Grid>
  </div>
);

export default VideoList;
