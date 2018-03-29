import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
import moment from 'moment';


const VideoListItem = ({ video }) => {
  const extra = (
    <div>
      <Icon name='eye' color='purple'/>
      {video.views}
    </div>
  );
  return (
    <Card fluid extra={extra}>
      <Image src={video.thumbnails.small} />
      <Card.Content>
        <Card.Header>
          {video.title}
        </Card.Header>
        <Card.Meta>
          <Icon name="game" color="red" />
          <a>{video.game}</a>
          <span className="float-right">
            <Icon name="time" />
            {moment(video.created_at).fromNow()}
          </span>
        </Card.Meta>
      </Card.Content>
      <Card.Content>
        <div className="float-right">
          <Icon name="eye" color="purple" />
          {video.views}
        </div>
        <Icon name="user" color="blue" />
        <a href={video.broadcaster.channel_url}>
          {video.broadcaster.name}
        </a>
      </Card.Content>
    </Card>
  );
};

export default VideoListItem;
