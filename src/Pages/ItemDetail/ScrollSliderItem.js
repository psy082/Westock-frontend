import React from "react";
import styled from "styled-components";

export default function ScrollSliderItem({ img }) {
  return <Img src={img} alt="item" />;
}

const Img = styled.img`
  position: relative;
  width: 100%;
`;
