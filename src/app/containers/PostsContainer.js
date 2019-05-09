// POSTS CONTAINER
// ===============
// Manage displaying the list of posts for a subreddit

import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/withStyles";
import { connect } from "react-redux";

import EmptySubreddit from "../components/EmptySubreddit";
import Post from "../components/Post";

import { fetchListing } from "../../redux/actions/reddit";
import { getPosts } from "../../redux/selectors/reddit";
import { getSubredditFromLocation } from "../../utilities";

class PostsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subreddit: getSubredditFromLocation(props.location),
    };
  }

  componentDidMount() {
    this.handleUpdatePosts();
    this.updatePosts = setInterval(
      () => this.handleUpdatePosts(),
      6000,
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({
        subreddit: getSubredditFromLocation(this.props.location),
      });
    }

    if (prevState.subreddit !== this.state.subreddit) {
      this.handleUpdatePosts();
    }
  }

  componentWillUnmount() {
    clearInterval(this.updatePosts);
  }

  handleUpdatePosts() {
    const { subreddit } = this.state;
    if (typeof subreddit === "string" && subreddit) this.props.updatePostList(subreddit);
  }

  render() {
    let postList;

    if (this.props.posts
     && Array.isArray(this.props.posts)
     && this.props.posts.length
    ) {
      postList = this.props.posts.slice(0, 25).map(post => (
        <Post
          content={post.data}
          key={post.data.name}
        />
      ));
    } else {
      postList = <EmptySubreddit/>;
    }

    return (
      <div>
        {postList}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  posts: getPosts(state),
});

const mapDispatchToProps = dispatch => ({
  updatePostList: subreddit => dispatch(fetchListing(subreddit)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
