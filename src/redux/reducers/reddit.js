// REDDIT REDUCER
// ==============
// Stores data retrieved from reddit

import { handleActions } from 'redux-actions';

import { emptyListing } from "../../api/reddit";

import { updateListing } from "../actions/reddit";

export const initialState = {
  listing: JSON.parse(JSON.stringify(emptyListing)),
};

const reducerMap = new Map([
  [
    updateListing,
    (state, action) => ({
      ...state,
      listing: action.payload,
    }),
  ],
]);

const handlerMap = handleActions(
  reducerMap,
  initialState,
);

export default handlerMap;
