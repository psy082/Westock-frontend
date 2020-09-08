import React from "react";
import styled from "styled-components";
import Banner from "./Components/Banner";

const MainNav = ({ tabTitle, activeTab, menuTabHandler }) => {
  return (
    <>
      <Nav>
        <List>
          {tabTitle.map((str, idx) => {
            return (
              <Tab
                active={activeTab === idx}
                key={idx}
                onClick={() => menuTabHandler(idx)}
              >
                {str}
              </Tab>
            );
          })}
        </List>
      </Nav>
      <Banner activeTab={activeTab} />
    </>
  );
};

const Nav = styled.div`
  ${(props) => props.theme.flexCenter};
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
  border-bottom: ${(props) =>
    props.active ? "5px solid black" : "5px solid white"};
  transition: 0.2s;
`;

export default MainNav;
