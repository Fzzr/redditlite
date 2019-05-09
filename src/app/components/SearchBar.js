// SEARCH BAR COMPONENT
// ====================
// Display search bar elements.

import React from "react";

const SearchBar = props => (
  <div >
    <label
      htmlFor={"subreddit-search"}
    >
      Choose a Subreddit:
    </label>
    <input
      id="subreddit-search"
      type="text"
      onChange={props.onChange}
      value={props.search}
    />
    <button
      onClick={props.onSubmit}
    >
      Search Subreddit
    </button>
  </div>
);

export default SearchBar;
