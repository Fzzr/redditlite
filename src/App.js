// TOP-LEVEL APPLICATION COMPONENT
// ===============================

import React, { Component } from "react";

import HeaderContainer from "./app/containers/HeaderContainer";
import PostsContainer from "./app/containers/PostsContainer";

import styles from "./styles/main.css";

const App = () => (
  <div>
    <HeaderContainer />
    <PostsContainer />
  </div>
);

export default App;
