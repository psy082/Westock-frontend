import React, { Component } from "react";
import Routes from "../Routes";
import GlobalStyles from "./GlobalStyles";

class App extends Component {
  render() {
    return (
      <>
        <Routes />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
