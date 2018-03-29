import React from 'react';
import { Icon } from 'semantic-ui-react';
import moment from 'moment';

const ClipViewer = ({ video }) => (
  <div>
    <h2>{video.title}</h2>
    <div className="videoWrapper">
      <iframe src={video.embed_url} height="480px" width="90%" align="middle" frameBorder='0' scrolling='no' allowFullScreen='true' />
    </div>
    <div>
      <div className="clipviewer-broadcaster">
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
  </div>
);

export default ClipViewer;
