// HEADER CONTAINER
// ================
// Handles display and contents of the header.

import React from "react";
import withStyles from "isomorphic-style-loader/withStyles";
import { Location } from "@reach/router";

import SearchBarContainer from "./SearchbarContainer";

import styles from "../../styles/header.css";

const HeaderContainer = () => (
  <header
    className={styles.Header}
  >
    <Location>
      {({location}) => <SearchBarContainer location={location}/>}
    </Location>
  </header>
);

export default withStyles(styles)(HeaderContainer);
