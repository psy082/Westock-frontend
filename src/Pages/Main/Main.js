import React, { Component } from "react";
import Header from "./Header";
import MainNav from "./MainNav";
import Contents from "./Contents";
import Ticker from "./Ticker";

const tabTitle = [
  "Sneakers",
  "Streetwear",
  "Collectibles",
  "Handbags",
  "Watches",
];

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
        <Header activeTab={this.state.activeTab} tabTitle={tabTitle} />
        <MainNav
          menuTabHandler={this.menuTabHandler}
          activeTab={this.state.activeTab}
          tabTitle={tabTitle}
        />
        <Contents />
        <Ticker />
      </>
    );
  }
}
