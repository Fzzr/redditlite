// TOP-LEVEL APPLICATION COMPONENT
// ===============================

import React, { Component } from "react";
import { Router, ServerLocation, LocationProvider } from "@reach/router";

import HeaderContainer from "./app/containers/HeaderContainer";
import PostsContainer from "./app/containers/PostsContainer";

import styles from "./styles/main.css";

const App = props => (
  <ServerLocation
    url={props.location}
  >
    <div>
      <Router>
        <HeaderContainer
          path="*"
        />
      </Router>
      <LocationProvider>
        <Router>
          <PostsContainer
            path="*"
          />
        </Router>
      </LocationProvider>
    </div>
  </ServerLocation>
);

export default App;
