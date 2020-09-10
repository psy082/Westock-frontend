import React, { useState, useEffect } from "react";
import styled from "styled-components";
import FirstDropdown from "./FirstDropdown";

const tabTitle = ["Browse", "News", "App", "About", "Help", "Login"];

const Nav = () => {
  const [scrollY, setScrollY] = useState(false);
  const [firstOpen, isFirstOpen] = useState(false);
  const [activeTab, setTab] = useState(0);
  const firstBrowse = true;
  const firstAbout = true;

  const firstHandler = (id) => {
    setTab(id);
    isFirstOpen(true);
  };

  const handleNavBg = () => {
    const isTop = window.scrollY < 100;
    setScrollY(!isTop);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleNavBg);
    return document.addEventListener("scroll", handleNavBg);
  }, []);

  return (
    <NavBar white={scrollY}>
      <NavLeft>
        {scrollY === true ? (
          <Logo
            alt="StockX"
            src="//stockx-assets.imgix.net/logo/stockx_homepage_logo_dark.svg?auto=compress,format"
          />
        ) : (
          <Logo
            alt="StockX"
            src="//stockx-assets.imgix.net/logo/stockx_homepage_logo_white.svg?auto=compress,format"
          />
        )}
      </NavLeft>
      <NavRight>
        {tabTitle.map((str, idx) => (
          <Menu
            key={idx}
            onMouseOver={() => (idx === 0 || idx === 3) && firstHandler(idx)}
            onMouseLeave={() => (idx === 0 || idx === 3) && isFirstOpen(false)}
          >
            {str}
            {firstOpen && idx === 0 && (
              <FirstDropdown
                firstBrowse={firstBrowse}
                activeTab={activeTab}
                setTab={setTab}
              />
            )}
            {firstOpen && idx === 3 && (
              <FirstDropdown
                firstAbout={firstAbout}
                activeTab={activeTab}
                setTab={setTab}
              />
            )}
          </Menu>
        ))}

        <Menu>Sign Up</Menu>
        {scrollY === true ? <Sell black>Sell</Sell> : <Sell>Sell</Sell>}
      </NavRight>
    </NavBar>
  );
};

const NavBar = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 90px;
  border-bottom: ${(props) =>
    props.white ? "1px solid #cecece" : "1px solid rgba(0, 0, 0, 0)"};
  color: ${(props) => (props.white ? "black" : "white")};
  background-color: ${(props) => (props.white ? "white" : "rgba(0, 0, 0, 0)")};
  transition: 0.5s;
  z-index: 9999;
`;

const NavLeft = styled.ul`
  ${(props) => props.theme.flexCenter}
  width: 380px;
`;

const Logo = styled.img`
  width: 300px;
  height: 42px;
  cursor: pointer;
`;

const NavRight = styled.ul`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 30px;
  font-size: 0.96rem;
`;

const Menu = styled.li`
  margin: 0 5px;
  padding: 8px;
  cursor: pointer;
`;

const Sell = styled.li`
  margin: 0 10px;
  padding: 8px 14px;
  border: ${(props) => (props.black ? "1px solid black" : "1px solid white")};
  border-radius: 20px;
  color: ${(props) => (props.black ? "black" : "white")};
  cursor: pointer;
  box-shadow: ${(props) =>
    props.black
      ? "0 0 1px 0px black inset, 0 0 1px 0px black;"
      : "0 0 1px 0px white inset, 0 0 1px 0px white"};
  transition: 0.2s;
  &:hover {
    color: ${(props) => (props.black ? "white" : "black")};
    background-color: ${(props) => (props.black ? "black" : "white")};
  }
`;

export default Nav;
