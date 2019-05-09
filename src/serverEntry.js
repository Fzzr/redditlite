// SERVER ENTRY POINT
// ==================

import "@babel/polyfill";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { Provider as ReduxProvider } from "react-redux";
import { Provider as StyleProvider} from "isomorphic-style-loader/StyleContext";

import { configureStore } from "./redux";
import App from "./App";
import Html from "./Html"

function render(store, request) {
  const state = store.getState();
  const css = new Set();
  const insertCss = (...styles) => styles.forEach(style => css.add(style._getCss()));

  const AppWithProviders = (
    <ReduxProvider store={store}>
      <StyleProvider
        value={{insertCss}}
      >
        <App
          location={request.url}
        />
      </StyleProvider>
    </ReduxProvider>
  );

  const html = (
    <Html
      initialState={JSON.stringify(state)}
      css={css}
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
      const html = render(store, req);
      return res.send(`<!DOCTYPE html>${html}`);
    });
  };
};
