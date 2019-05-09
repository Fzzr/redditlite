// WRAPPER FOR APP MARKUP
// ======================

import React from "react";

const Html = () => (
  <html>
    <head />
    <body  >
      <div
        id="REACT_ROOT"
        dangerouslySetInnerHTML={{ __html: props.html }}
      />
      <script src={"assets/main.js"} defer/>
    </body>
  </html>
);

export default Html;
