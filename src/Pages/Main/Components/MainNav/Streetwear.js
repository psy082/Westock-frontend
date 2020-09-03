import React, { Component } from "react";
import styled from "styled-components";

export default class Streetwear extends Component {
  render() {
    return (
      <Slick>
        <Image
          alt=""
          height="190px"
          src="https://stockx-assets.imgix.net/CSAssets/banner/4USStreetwearBrainDeadTNF/BrainDead_TNF_Internal_Banners_WebBanner_1.jpg?auto=compress,format"
        />
      </Slick>
    );
  }
}

const Slick = styled.div`
  display: flex;
  justify-content: center;
  background-color: #185ca9;
`;

const Image = styled.img`
  cursor: pointer;
`;
