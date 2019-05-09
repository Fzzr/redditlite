// REDUX STORE
// ===========

import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers";
import rootSaga from "./sagas";

export function configureStore() {
  const sagaMiddleware = createSagaMiddleware();

  let initialState;

  if (process.env.BROWSER) {
    initialState = window.__INITIAL_STATE__;
  }

  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(sagaMiddleware)),
  );

  return new Promise (resolve => {
    sagaMiddleware.run(rootSaga);
    resolve(store);
  });
};
