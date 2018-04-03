import React from 'react';
import { Grid } from 'semantic-ui-react';
import TopClipListItem from './TopClipListItem';

let count = 0;

const TopClipsList = props => (
  <Grid celled>
    <Grid.Row columns={5}>
      {props.videos.map(video => (
        <Grid.Column color="white" id="cliplistitem-padding">
          <TopClipListItem {...props} video={video} count={count++ % 5 + 1} onItemClick={props.onItemClick} />
        </Grid.Column>
      ))}
    </Grid.Row>
  </Grid>
);

export default TopClipsList;
