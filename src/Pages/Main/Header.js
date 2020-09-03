import React, { Component } from "react";
import Sneakers from "./Components/Header/Sneakers";
import Streetwear from "./Components/Header/Streetwear";
import Collectibles from "./Components/Header/Collectibles";
import Handbags from "./Components/Header/Handbags";
import Watches from "./Components/Header/Watches";

const header = {
  0: <Sneakers />,
  1: <Streetwear />,
  2: <Collectibles />,
  3: <Handbags />,
  4: <Watches />,
};

export default class Header extends Component {
  render() {
    return <>{header[this.props.activeTab]}</>;
  }
}
