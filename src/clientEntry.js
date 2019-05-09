// CLIENT ENTRY POINT

// import "@babel/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";

import { configureStore } from "./redux";
import App from "./App";

configureStore()
  .then(store => {
    const AppWithProviders = (
      <ReduxProvider store={store}>
        <App
          location={window.location.pathname}
        />
      </ReduxProvider>
    );

    ReactDOM.hydrate(
      AppWithProviders,
      document.getElementById("REACT_ROOT"),
    );
  });
