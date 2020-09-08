import React from "react";
import styled from "styled-components";
import Search from "./Components/Search";

const backgroundImg = {
  0: "url(https://stockx-assets.imgix.net/Core/sneaker_plain.png?auto=compress,format)",
  1: "url(https://stockx-assets.imgix.net/Core/streetwear_plain.png?auto=compress,format)",
  2: "url(https://stockx-assets.imgix.net/Core/collectibles_plain.png?auto=compress,format)",
  3: "url(https://stockx-assets.imgix.net/Core/handbag_plain.png?auto=compress,format)",
  4: "url(https://stockx-assets.imgix.net/Core/watch_plain.png?auto=compress,format)",
};

const Header = ({ activeTab, tabTitle }) => {
  return (
    <HeaderContainer backgroundImg={backgroundImg[activeTab]}>
      <TitleWrapper>
        <Title>Buy & Sell</Title>
        <Title sub>Authentic {tabTitle[activeTab]}</Title>
      </TitleWrapper>
      <Search />
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  height: 520px;
  margin-top: 0px;
  padding-top: 111px;
  text-align: center;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: ${(props) => props.backgroundImg};
  transition: 0.2s;
`;

const TitleWrapper = styled.div`
  margin-bottom: 20px;
  padding: 0 10px;
`;

const Title = styled.span`
  display: ${(props) => (props.sub ? "inline-block" : "block")};
  margin-bottom: ${(props) => (props.sub ? "0" : "10px")};
  padding: ${(props) => (props.sub ? "10px" : "0")};
  font-size: 68px;
  font-weight: 600;
  letter-spacing: 2px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => (props.sub ? "#010101" : "none")};
`;

export default Header;
