// WRAPPER FOR APP MARKUP
// ======================

import React from "react";

const Html = props => (
  <html>
    <head>
      <style>{[...props.css].join('')}</style>
      <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400" rel="stylesheet"/>
    </head>
    <body
      style={{
        margin: 0,
        fontFamily: "'Nunito Sans', sans-serif",
      }}
    >
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
