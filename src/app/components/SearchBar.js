// SEARCH BAR COMPONENT
// ====================
// Display search bar elements.

import React from "react";
import withStyles from "isomorphic-style-loader/withStyles";

import styles from "../../styles/search.css";

const SearchBar = props => (
  <div
    className={styles.SearchBar}
  >
    <label
      htmlFor={"subreddit-search"}
    >
      Choose a Subreddit:
    </label>
    <input
      className={styles.SearchBox}
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

export default withStyles(styles)(SearchBar);
