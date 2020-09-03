import React, { Component } from "react";
import Header from "./Header";
import MainNav from "./MainNav";
import Contents from "./Contents";
import Ticker from "./Ticker";

export default class Main extends Component {
  constructor() {
    super();
    this.state = { activeTab: 0 };
  }

  menuTabHandler = (id) => {
    this.setState({ activeTab: id });
  };

  render() {
    return (
      <>
        <Header activeTab={this.state.activeTab} />
        <MainNav
          menuTabHandler={this.menuTabHandler}
          activeTab={this.state.activeTab}
        />
        <Contents />
        <Ticker />
      </>
    );
  }
}
