import React from "react";
import styled from "styled-components";

function BuyingCurrentList(props) {
  const {
    image_url,
    product_name,
    product_size_id,
    product_style,
    price,
    highest_bid,
    lowest_ask,
    expired_date,
  } = props;

  return (
    <tr>
      <Td className="Item">
        <Div className="ItemWrapper">
          <Img alt="item-image" src={image_url} />
          <Div className="Item__description">
            <Div className="Item__name">{product_name}</Div>
            <Div className="Item__spanWrapper">
              <Span className="Item__size">{product_size_id}</Span>
              <Span className="Item__style_id">{product_style}</Span>
            </Div>
          </Div>
        </Div>
      </Td>
      <Td className="Bid-price">{`$${price.split(".")[0]}`}</Td>
      <Td className="Highest-bid">{`$${highest_bid.split(".")[0]}`}</Td>
      <Td className="Lowest-ask">$150</Td>
      <Td classNane="Expires">{expired_date}</Td>
    </tr>
  );
}

const Td = styled.td`
  width: 16.6%;
  padding: 3px 8px;
  font-size: 12pt;
  font-weight: 400;
  border-right: 1px solid #e5e7ea;
  border-bottom: 2px solid #ddd;

  &:first-child {
    width: 40%;
  }

  &:last-child {
    width: 10%;
    padding-left: 12px;
    vertical-align: middle;
  }

  &.Item {
    align-items: center;
  }

  &.Bid-price,
  &.Highest-bid,
  &.Lowest-ask,
  &.Expires {
    padding-left: 12px;
    vertical-align: middle;
  }
`;

const Div = styled.div`
  &.ItemWrapper {
    display: flex;
  }

  &.Item__description {
    margin: 28px 28px 28px 38px;
  }

  &.Item__category {
    padding-bottom: 4px;
    font-size: 22pt;
    font-weight: bold;
  }

  &.Item__spanWrapper {
    padding-top: 12px;
  }

  &.Item__name {
    font-size: 15pt;
    color: grey;
  }
`;

const Span = styled.span`
  font-size: 18pt;
  font-weight: 600;
  color: #000;
  text-transform: capitalize;

  &.Item__style_id,
  &.Item__size {
    padding-right: 15px;
    font-weight: normal;
    font-size: 12pt;
  }
`;

const Img = styled.img`
  width: 135px;
  height: 135px;
  margin-left: 18px;
`;

export default BuyingCurrentList;
