import React, { Component } from "react";
import styled from "styled-components";

export default class Watches extends Component {
  render() {
    return (
      <Slick>
        <Image
          alt=""
          height="190px"
          src="https://stockx-assets.imgix.net/CSAssets/banner/2USWatchesSwatchBape/Bape_Swatch_8.13WebBanner_copy_4.jpg?auto=compress,format"
        />
      </Slick>
    );
  }
}

const Slick = styled.div`
  display: flex;
  justify-content: center;
  background-color: #85bdde;
`;

const Image = styled.img`
  cursor: pointer;
`;
