// EMPTY SUBREDDIT
// ===============
// Alternate component for when no posts are available

import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/withStyles";

import styles from "../../styles/posts.css";

const EmptySubreddit = () => (
  <span
    className={styles.Empty}
  >
    There are no posts to display.
  </span>
);

export default withStyles(styles)(EmptySubreddit);
