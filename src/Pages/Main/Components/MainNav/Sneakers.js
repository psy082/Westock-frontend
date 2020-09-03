import React, { Component } from "react";
import styled from "styled-components";

export default class Handbags extends Component {
  render() {
    return (
      <Slick>
        <Image
          alt=""
          height="190px"
          src="https://stockx-assets.imgix.net/CSAssets/banner/1.ROWSNEAKERSREDUCEDSHIPPINGSET1/Reduced-Intl-Shipping_WebBanner-EN.png?auto=compress,format"
        />
      </Slick>
    );
  }
}

const Slick = styled.div`
  display: flex;
  justify-content: center;
  background-color: rgb(220, 220, 225);
`;

const Image = styled.img`
  cursor: pointer;
`;
