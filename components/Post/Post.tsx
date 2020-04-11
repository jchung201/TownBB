import React, { Component } from 'react';
import { connect, ConnectedProps } from 'react-redux';

const mapStateToProps = ({ home: { post } }) => ({
  post,
});

const mapDispatchToProps = {};

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;

class Post extends Component<PropsFromRedux> {
  render() {
    const { post } = this.props;
    return <div>Post {post.title}</div>;
  }
}

export default connector(Post);
