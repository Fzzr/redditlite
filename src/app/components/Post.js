// POST COMPONENT
// ==============
// Represents an individual post on a subreddit.

import React from "react";
import withStyles from "isomorphic-style-loader/withStyles";

import styles from "../../styles/posts.css";

const Post = props => {
  const {
    author,
    created_utc,
    num_comments,
    permalink,
    title,
    url,
  } = props.content;

  const postDate = new Date(created_utc*1000);

  const postTimeString = Intl.DateTimeFormat(
    "default",
    {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    }
  ).format(postDate);

  const postDayString = Intl.DateTimeFormat(
    "default",
    {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    }
  ).format(postDate);

  return (
    <div
      className={styles.Post}
    >
      <a
        className={styles.Title}
        href={url}
      >
        {title}
      </a>
      <br/>

      <span
        className={styles.Info}
      >
        {`Posted at ${postTimeString} on ${postDayString} by `}
        {
          <a
            className={styles.Author}
            href={`https://reddit.com/user/${author}`}
          >
            {author}
          </a>
        }
      </span>
      <br/>
      <a
        className={styles.Comment}
        href={`https://reddit.com${permalink}`}
      >
        {`${num_comments} Comments`}
      </a>
    </div>
  );
};


export default withStyles(styles)(Post);
