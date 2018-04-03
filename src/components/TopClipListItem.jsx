import React from 'react';
import { Grid, Image, Header } from 'semantic-ui-react';

const TopClipListItem = (props) => {

  const clickHandler = () => {
    props.onItemClick(props.video);
    props.history.push(`/clip/${props.video.slug}`);
  }

  return (
    <Grid onClick={clickHandler}>
      <Grid.Column>
        <Image src={props.video.thumbnails.small} label={{ color: 'yellow', content: `Top ${props.count}`, icon: 'star', ribbon: true }} />
        <Header as="h3" content={props.video.title} inverted />
      </Grid.Column>
    </Grid>
  );
};

export default TopClipListItem;
