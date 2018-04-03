import React from 'react';
import { Button, Comment, Form, Header }  from 'semantic-ui-react';
import CommentListItem from './CommentListItem';

const CommentsList = props => (
  <Comment.Group>
    <Header as="h3" id="homeview-video-title" dividing>Comments</Header>
    <CommentListItem />
    <Form reply>
      <Form.TextArea />
      <Button content='Comment' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
);

export default CommentsList;
