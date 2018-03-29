import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
import moment from 'moment';


const VideoListItem = (props) => {

  const clickHandler = () => {
    props.onItemClick(props.video);
    props.history.push(`/clip/${props.video.slug}`)
  };

  return (
    <Card fluid onClick={clickHandler} color="purple">
      <Image src={props.video.thumbnails.small} />
      <Card.Content>
        <Card.Header>
          {props.video.title}
        </Card.Header>
        <Card.Meta>
          <Icon name="game" color="purple" />
          <a>{props.video.game}</a>
          <span className="float-right">
            <Icon name="time" />
            {moment(props.video.created_at).fromNow()}
          </span>
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <div className="float-right">
          <Icon name="eye" color="blue" />
          {props.video.views}
        </div>
        <Icon name="twitch" color="black"/>
        <a href={props.video.broadcaster.channel_url}>
          {props.video.broadcaster.name}
        </a>
      </Card.Content>
    </Card>
  );
};


export default VideoListItem;
