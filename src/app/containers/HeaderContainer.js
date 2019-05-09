// HEADER CONTAINER
// ================
// Handles display and contents of the header.

import React from "react";
import { Location } from "@reach/router";

import SearchBarContainer from "./SearchbarContainer";

const HeaderContainer = () => (
  <header>
    <Location>
      {({location}) => <SearchBarContainer location={location}/>}
    </Location>
  </header>
);

export default HeaderContainer;
