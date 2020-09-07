import React, { Component } from "react";
import styled from "styled-components";
import Banner from "./Components/Banner";

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
            {this.props.tabTitle.map((str, idx) => {
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
        <Banner activeTab={this.props.activeTab} />
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
