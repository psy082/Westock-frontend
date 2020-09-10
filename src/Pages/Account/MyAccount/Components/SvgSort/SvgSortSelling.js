import React from "react";
import styled from "styled-components";

function SvgSortSelling() {
  return (
    <SvgSortSellingComp
      version="1.1"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <path fill="#444" d="M11 7H5l3-4z" />
      <path fill="#444" d="M5 9h6l-3 4z" />
    </SvgSortSellingComp>
  );
}

const SvgSortSellingComp = styled.svg`
  position: absolute;
  top: 7px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export default SvgSortSelling;
