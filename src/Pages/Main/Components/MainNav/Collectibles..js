import React, { Component } from "react";
import styled from "styled-components";

export default class Collectibles extends Component {
  render() {
    return (
      <Slick>
        <Image
          alt=""
          height="190px"
          src="https://stockx-assets.imgix.net/CSAssets/banner/1USCollectiblesKAWSParty/083120_SX_Kaws_Party_Promo_Internal_BannersWebBanner.jpg?auto=compress,format"
        />
      </Slick>
    );
  }
}

const Slick = styled.div`
  display: flex;
  justify-content: center;
  background-color: #d4e14b;
`;

const Image = styled.img`
  cursor: pointer;
`;
