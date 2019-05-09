// WRAPPER FOR APP MARKUP
// ======================

import React from "react";

const Html = props => (
  <html>
    <head />
    <body  >
      <div
        id="REACT_ROOT"
        dangerouslySetInnerHTML={{ __html: props.html }}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.__INITIAL_STATE__=${props.initialState}`
        }}
      />
      <script src={"assets/main.js"} defer/>
    </body>
  </html>
);

export default Html;
