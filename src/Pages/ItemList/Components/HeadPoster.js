import React from "react";
import styled from "styled-components";
import { ITEM_DESC } from "./data/itemData";

function HeadPoster({ category, series }) {
  return (
    <ItemDescription category={category}>
      <div className="headTitle">{`${ITEM_DESC[category].name} ${
        +series > 0 ? series : ""
      }`}</div>
      <div className="headText">{`${
        series ? ITEM_DESC[category].series[series] : ITEM_DESC[category].desc
      }`}</div>
    </ItemDescription>
  );
}

const ItemDescription = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  max-width: 1170px;
  height: 270px;
  min-height: initial;
  padding-left: 52px;
  margin: auto;
  background-image: url(${({ category }) => ITEM_DESC[category].url});

  .headTitle {
    margin-top: 22px;
    margin-bottom: 4px;
    letter-spacing: -0.04em;

    text-transform: capitalize;
    line-height: normal;
    font-size: 52px;
  }

  .headText {
    margin: 0 0 11px;
    max-width: 438px;
    font-size: 18px;
    letter-spacing: normal;
    line-height: normal;
    overflow: hidden;
  }
`;

export default HeadPoster;
