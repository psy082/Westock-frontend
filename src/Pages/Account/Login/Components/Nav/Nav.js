import React, { Component } from "react";
import styled from "styled-components";

class Nav extends Component {
  render() {
    return (
      <Navbar>
        <NavLogo
          alt="logo"
          src="https://stockx-assets.imgix.net/logo/stockx_homepage_logo_dark.svg?auto=compress,format"
        />
      </Navbar>
    );
  }
}

const Navbar = styled.div`
  ${(props) => props.theme.flexCenter}
`;

const NavLogo = styled.img`
  width: 132px;
  height: 60px;
  margin: 15px;
`;

export default Nav;
