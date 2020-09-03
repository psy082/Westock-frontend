import React, { Component } from "react";
import styled from "styled-components";
import Sneakers from "./Components/MainNav/Sneakers";
import Streetwear from "./Components/MainNav/Streetwear";
import Collectibles from "./Components/MainNav/Collectibles.";
import Handbags from "./Components/MainNav/Handbags";
import Watches from "./Components/MainNav/Watches";

const tabTitle = [
  "Sneakers",
  "Streetwear",
  "Collectibles",
  "Handbags",
  "Watches",
];

const tab = {
  0: <Sneakers />,
  1: <Streetwear />,
  2: <Collectibles />,
  3: <Handbags />,
  4: <Watches />,
};

export default class MainNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: this.props.activeTab,
    };
  }

  render() {
    return (
      <>
        <Nav>
          <List>
            {tabTitle.map((str, idx) => {
              return (
                <Tab
                  active={this.props.activeTab === idx}
                  key={idx}
                  onClick={() => this.props.menuTabHandler(idx)}
                >
                  {str}
                </Tab>
              );
            })}
          </List>
        </Nav>
        {tab[this.props.activeTab]}
      </>
    );
  }
}

const Nav = styled.div`
  display: flex;
  justify-content: center;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 768px;
  margin: 17px 17px 0 17px;
  font-size: 20px;
  color: #010101;
`;

const Tab = styled.li`
  height: 35px;
  cursor: pointer;
  border-bottom: ${(props) => (props.active ? "5px solid black" : "none")};
`;
