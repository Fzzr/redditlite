// ROOT SAGA
// =========

import { all, call } from "redux-saga/effects";

import reddit from "./reddit";

export default function* rootSaga() {
  yield all([
    call(reddit.watchFetchListingSaga),
  ]);
};
