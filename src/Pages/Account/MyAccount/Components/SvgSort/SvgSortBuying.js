import React, { Component } from "react";
import styled from "styled-components";

class SvgSortBuying extends Component {
  render() {
    return (
      <SvgSortBuyingComp
        version="1.1"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <path fill="#444" d="M11 7H5l3-4z" />
        <path fill="#444" d="M5 9h6l-3 4z" />
      </SvgSortBuyingComp>
    );
  }
}

const SvgSortBuyingComp = styled.svg`
  position: absolute;
  top: -2px;
  right: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export default SvgSortBuying;
