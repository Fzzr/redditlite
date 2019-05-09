// REDDIT ACTIONS
// ==============

import { createAction } from "redux-actions";

export const updateListing = createAction(
  "UPDATE_LISTING",
  listing => listing,
);

export const fetchListing = createAction(
  "FETCH_LISTING",
  subreddit => subreddit,
);
