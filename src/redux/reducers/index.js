// REDUCERS
// ========
// Combines all handmade reducers into one for use in the store.

import { combineReducers } from "redux";

import reddit from "./reddit";

const rootReducer = combineReducers({
  reddit,
});

export default rootReducer;
