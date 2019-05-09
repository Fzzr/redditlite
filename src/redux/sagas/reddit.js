// REDDIT SAGAS
// ============

import { call, put, takeLatest } from "redux-saga/effects";

import {
  updateListing,
  fetchListing,
} from "../actions/reddit";

import { getSubredditListing } from "../../api/reddit";

export function* fetchListingSaga(action) {
  const subreddit = action.payload;

  const listing = yield call(getSubredditListing, subreddit);

  yield put(updateListing(listing));
};

export default {
  *watchFetchListingSaga() {
    yield takeLatest(
      [
        fetchListing.toString(),
      ],
      fetchListingSaga,
    );
  },
};
