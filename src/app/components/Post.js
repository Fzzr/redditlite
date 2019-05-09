// POST COMPONENT
// ==============
// Represents an individual post on a subreddit.

import React from "react";

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
    <div>
      <a
        href={url}
      >
        {title}
      </a>
      <br/>

      <span >
        {`Posted at ${postTimeString} on ${postDayString} by `}
        {
          <a
            href={`https://reddit.com/user/${author}`}
          >
            {author}
          </a>
        }
      </span>
      <br/>
      <a
        href={`https://reddit.com${permalink}`}
      >
        {`${num_comments} Comments`}
      </a>
    </div>
  );
};


export default Post;
