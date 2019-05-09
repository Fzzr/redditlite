// POSTS CONTAINER
// ===============
// Manage displaying the list of posts for a subreddit

import React, { Component } from "react";
import { connect } from "react-redux";

import Post from "../components/Post";

class PostsContainer extends Component {
  render() {
    const postList = [];

    return (
      <div>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);

