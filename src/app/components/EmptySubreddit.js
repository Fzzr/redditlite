// EMPTY SUBREDDIT
// ===============
// Alternate component for when no posts are available

import React, { Component } from "react";
import withStyles from "isomorphic-style-loader/withStyles";

const EmptySubreddit = () => (
  <span>
    There are no posts to display.
  </span>
);

export default EmptySubreddit;
