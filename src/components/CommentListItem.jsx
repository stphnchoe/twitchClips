import React from 'react';
import { Comment } from 'semantic-ui-react';

const CommentListItem = props => (
  <div>
  <Comment id="homeview-video-title" >
    <Comment.Avatar src='https://flymark.com.ua/Content/no-photo.jpg' />
    <Comment.Content>
      <Comment.Author as='a' id="white-font" >Matt</Comment.Author>
      <Comment.Metadata>
        <div id="white-font">Today at 5:42PM</div>
      </Comment.Metadata>
      <Comment.Text id="white-font">This has been very useful for my research. Thanks as well!</Comment.Text>
    </Comment.Content>
  </Comment>
  <Comment id="homeview-video-title">
        <Comment.Avatar src='https://flymark.com.ua/Content/no-photo.jpg' />
        <Comment.Content>
          <Comment.Author as='a' id="white-font">Elliot Fu</Comment.Author>
          <Comment.Metadata>
            <div>Yesterday at 12:30AM</div>
          </Comment.Metadata>
          <Comment.Text id="white-font">
            <p>This has been very useful for my research. Thanks as well!</p>
          </Comment.Text>
        </Comment.Content>
      </Comment>
    </div>
);
export default CommentListItem;
