import React from "react";
import styled from "styled-components";

const NoResult = () => {
  return (
    <ResultNothing>
      NOTHING TO SEE HERE! TAKE A TRIP TO THE <a href="/">&nbsp;BROWSE PAGE</a>
      &nbsp;OR&nbsp;
      <a href="/">SUGGEST A PRODUCT</a>
    </ResultNothing>
  );
};

const ResultNothing = styled.span`
  display: flex;
  width: inherit;
  height: 50px;
  padding: 15px;
  margin: 0 auto;
  font: 700 11px "proxima-nova, sans-serif";
  text-align: left;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 4px 3px 0 hsla(0, 0%, 72.2%, 0.6);
  overflow-y: auto;
  z-index: 9999;

  a {
    text-decoration: underline;
    color: black;
  }
`;

export default NoResult;
