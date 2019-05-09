// SEARCHBAR CONTAINER
// ===================
// Manage state and requests for subreddit selection

import React, { Component } from "react";
import { navigate } from "@reach/router";

import SearchBar from "../components/SearchBar";

import { updateSubreddit } from "../../redux/actions/reddit";
import { getSubredditFromLocation } from "../../utilities";

class SearchBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: getSubredditFromLocation(props.location),
    };
  }

  handleChange(event) {
    this.setState({
      search: event.target.value,
    });
  }

  handleUpdateSubreddit() {
    navigate(`/${this.state.search}`);
  }

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        onChange={event => this.handleChange(event)}
        onSubmit={() => this.handleUpdateSubreddit()}
        search={search}
      />
    );
  }
}

export default SearchBarContainer;
