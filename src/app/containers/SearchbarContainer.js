// SEARCHBAR CONTAINER
// ===================
// Manage state and requests for subreddit selection

import React, { Component } from "react";

import SearchBar from "../components/SearchBar";

class SearchBarContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  handleChange(event) {
    this.setState({
      search: event.target.value,
    });
  }
  render() {
    const { search } = this.state;

    return (
      <SearchBar
        onChange={event => this.handleChange(event)}
        search={search}
      />
    );
  }
}

export default SearchBarContainer;
