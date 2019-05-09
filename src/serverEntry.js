// SERVER ENTRY POINT

import "@babel/polyfill";

import React from "react";
import ReactDOMServer from "react-dom/server";

import App from "./App";
import Html from "./Html"

function render() {
  const App = (
    <App
      location={request.url}
    />
  );

  const html = (
    <Html
      html={ReactDOMServer.renderToString(
        App
      )}
    />
  );

  return ReactDOMServer.renderToStaticMarkup(html);
}

export default () => {
  return (req, res, next) => {
    const html = render();
    return res.send(`<!DOCTYPE html>${html}`);
  };
};
