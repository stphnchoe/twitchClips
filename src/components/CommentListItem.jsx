import React from 'react';
import { Comment } from 'semantic-ui-react';
import moment from 'moment';

const CommentListItem = props => (
  <Comment id="homeview-video-title" >
    <Comment.Avatar src={props.comment.avatar_img} />
    <Comment.Content>
      <Comment.Author as='a' id="white-font" >{props.comment.username}</Comment.Author>
      <Comment.Metadata>
        <div id="white-font">{moment(props.comment.created_at).fromNow()}</div>
      </Comment.Metadata>
      <Comment.Text id="white-font">{props.comment.text}</Comment.Text>
    </Comment.Content>
  </Comment>
);
export default CommentListItem;
