import React from 'react';
import { Grid } from 'semantic-ui-react';
import VideoListItem from './VideoListItem';

const VideoList = ({ videos }) => (
  <Grid padded columns={6} >
    {videos.map((video) => {
      return (
        <Grid.Column stretched computer={3} tablet={5} mobile={16}>
          <VideoListItem video={video} key={video.slug} />
        </Grid.Column>);
      })
    }
  </Grid>
);

export default VideoList;
