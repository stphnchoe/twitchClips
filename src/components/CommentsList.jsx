import React, { Component } from 'react';
import { Button, Comment, Form, Header }  from 'semantic-ui-react';
import CommentListItem from './CommentListItem';

class CommentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    }
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    });
  }

  handleSubmit() {
    this.props.addComment(this.state.text);
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <Comment.Group>
        <Header as="h3" id="homeview-video-title" dividing>Comments</Header>
        {this.props.videoComments.map(comment => <CommentListItem comment={comment} />)}
        <Form reply onSubmit={this.handleSubmit}>
          <Form.TextArea value={this.state.text} onChange={this.onChange}/>
          <Button content='Comment' labelPosition='left' icon='edit' primary />
        </Form>
      </Comment.Group>
    );
  }
};


export default CommentsList;
