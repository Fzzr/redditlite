// SERVER ENTRY POINT

import "@babel/polyfill";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { Provider as ReduxProvider } from "react-redux";

import { configureStore } from "./redux";
import App from "./App";
import Html from "./Html"

function render(store) {
  const state = store.getState();

  const AppWithProviders = (
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  );

  const html = (
    <Html
      initialState={JSON.stringify(state)}
      html={ReactDOMServer.renderToString(
        AppWithProviders
      )}
    />
  );

  return ReactDOMServer.renderToStaticMarkup(html);
}

export default () => {
  return (req, res, next) => {
    configureStore().then(store => {
      const html = render(store);
      return res.send(`<!DOCTYPE html>${html}`);
    });
  };
};
