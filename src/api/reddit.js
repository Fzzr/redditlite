// REDDIT API
// ==========
// API methods for fetching subreddit listings, which are "pages" of posts.

export const emptyListing = {
  data: {
    children: [],
    before: null,
    after: null,
  },
};

export const getSubredditListing = subreddit => {
  try {
    if (typeof subreddit !== "string" || !subreddit) {
      throw new TypeError("Empty or invalid subreddit name provided");
    }
    return fetch(`https://www.reddit.com/r/${subreddit}.json`, {
      method: "GET",
      headers: {},
    })
      .then(response => {
        if (response.status !== 200) {
          console.info(`Subreddit ${subreddit} does not exist.`);
          return JSON.parse(JSON.stringify(emptyListing));
        }
        return response.json();
      })
      .then(body => {
        return body;
      })
      .catch(error => {
        // Catch CORS errors caused by redirect to search.
        console.error(error.message);
      });
  } catch (error) {
    console.error(error.message);
  }
};
