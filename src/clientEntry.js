// CLIENT ENTRY POINT

// import "@babel/polyfill";

import React from "react";
import ReactDOM from "react-dom";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as StyleProvider} from "isomorphic-style-loader/StyleContext";

import { configureStore } from "./redux";
import App from "./App";

const insertCss = (...styles) => {
  const removeCss = styles.map(style => style._insertCss());
  return () => removeCss.forEach(dispose => dispose());
};

configureStore()
  .then(store => {
    const AppWithProviders = (
      <ReduxProvider store={store}>
        <StyleProvider
          value={{insertCss}}
        >
          <App
            location={window.location.pathname}
          />
        </StyleProvider>
      </ReduxProvider>
    );

    ReactDOM.hydrate(
      AppWithProviders,
      document.getElementById("REACT_ROOT"),
    );
  });
