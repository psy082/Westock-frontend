import React, { Component } from "react";
import styled from "styled-components";

export default class Handbags extends Component {
  render() {
    return (
      <Slick>
        <Image
          alt=""
          height="190px"
          src="https://stockx-assets.imgix.net/CSAssets/banner/1USHBTelfarNew/Telfair_7.31_BannersWebBanner_copy.jpg?auto=compress,format"
        />
      </Slick>
    );
  }
}

const Slick = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fefefe;
`;

const Image = styled.img`
  cursor: pointer;
`;
