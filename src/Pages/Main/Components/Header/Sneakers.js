import React, { Component } from "react";
import styled from "styled-components";
import Search from "../Search";

export default class Sneakers extends Component {
  render() {
    return (
      <HeaderContainer>
        <TitleWrapper>
          <Title>Buy & Sell</Title>
          <Title sub>Authentic Sneakers</Title>
        </TitleWrapper>
        <Search />
      </HeaderContainer>
    );
  }
}

const HeaderContainer = styled.div`
  height: 520px;
  margin-top: 0px;
  padding-top: 111px;
  text-align: center;
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(//stockx-assets.imgix.net/Core/sneaker_plain.png?auto=compress,format);
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
  color: white;
  background-color: ${(props) => (props.sub ? "#010101" : "none")};
`;
