import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import QuestionButton from "../Buttons/QuestionButton";
import { SORT_DESC } from "../../itemData";

const changeValue = 19;

function ListPanel({ products, sort, getSortText }) {
  return (
    <ListContainer>
      <ProductsTable>
        <thead>
          <tr>
            {[
              "name",
              SORT_DESC[sort].qString,
              "last sale",
              "lowest ask",
              "highest bid",
            ].map((title) => (
              <HeadTitle
                key={title}
                className={
                  title === "name"
                    ? "name"
                    : title === SORT_DESC[sort].qString
                    ? "selectedSort"
                    : "rest"
                }
              >
                {title}
                {title !== "name" && (
                  <InfoMark>
                    <QuestionButton />
                  </InfoMark>
                )}
              </HeadTitle>
            ))}
          </tr>
        </thead>
        <tbody>
          {products?.map((product) => (
            <ProductList key={product.product_id}>
              <ListCategory className="title">
                <ListItemImage>
                  <Link to={`/${product.product_id}`}>
                    <img
                      alt={product.name}
                      src={product.image}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/Images/empty_item.jpg";
                      }}
                    />
                  </Link>
                </ListItemImage>
                <Link to={`/${product.product_id}`}>{product.name}</Link>
              </ListCategory>
              <ListCategory className="selectedValue">
                {getSortText("list", `${sort}`, product[sort])}
              </ListCategory>
              <ListCategory className="lastSale">
                <LastSaleText>
                  {`$${product.last_sale}`}
                  {changeValue > 0 && (
                    <span className="green">{`+$${changeValue}`}</span>
                  )}
                  {changeValue < 0 && (
                    <span className="red">{`-$${Math.abs(changeValue)}`}</span>
                  )}
                </LastSaleText>
              </ListCategory>
              <ListCategory className="lowestAsk">{`$${product.lowest_ask}`}</ListCategory>
              <ListCategory className="highestBid">{`$${product.highest_bid}`}</ListCategory>
            </ProductList>
          ))}
        </tbody>
      </ProductsTable>
    </ListContainer>
  );
}

const ListContainer = styled.div``;

const BackToTop = styled.div``;

const ProductsTable = styled.table`
  width: 945px;
  max-width: 100%;
  margin-bottom: 22px;
  table-layout: fixed;
  background-color: transparent;
`;

const HeadTitle = styled.th`
  padding: 8px;
  padding-bottom: 0;
  border-bottom: 2px solid #ddd;
  font-family: "Bebas Neue", cursive;
  font-size: 22px;
  text-transform: uppercase;
  text-align: left;
  line-height: 1.42857143;
  vertical-align: bottom;

  &.name {
    width: 50%;
  }

  &.selectedSort {
    position: relative;
    width: 16%;
    padding-left: 12px;
    padding-right: 5px;
    border-top: 0;
    text-align: left;
    color: #2e2e2e;
    background-color: #f5f5f5 !important;
    cursor: pointer;
  }

  &.rest {
    display: table-cell;
    width: 17%;
    padding-left: 15px;
    border-top: 0;
    background-repeat: no-repeat;
    background-position: 100% 50%;
    background-image: url("https://stockx-assets.imgix.net/png/icons/sort_both.png?auto=compress%2Cformat");
    cursor: pointer;
  }
`;

const InfoMark = styled.sup`
  vertical-align: super;
  font-size: smaller;

  svg {
    display: inline-block;
    width: 1em;
    height: 1em;
    margin-left: 2px;
    font-size: 0.75em;
    vertical-align: -0.125em;
    overflow: visible;
  }
`;

const ProductList = styled.tr`
  font-size: 14px;
`;

const ListCategory = styled.td`
  padding: 8px;
  border-top: 1px solid #ddd;
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 57px;
  text-overflow: ellipsis;
  vertical-align: top;
  white-space: nowrap;
  cursor: auto;
  overflow: hidden;

  &.title {
    width: 50%;

    a {
      color: #2e2e2e;
      text-decoration: none;
      cursor: pointer;
    }
  }

  &.selectedValue {
    width: 16%;
    padding-left: 12px;
    padding-right: 5px;
    text-align: left;
    background-color: #f5f5f5;
  }

  &.lastSale {
    display: table-cell;
    width: 17%;
    padding-left: 15px;
  }

  &.lowestAsk {
    display: table-cell;
    width: 16%;
  }

  &.highestBid {
    display: table-cell;
    width: 16%;
  }
`;

const LastSaleText = styled.span`
  .green {
    margin-left: 8px;
    color: ${({ theme: { colors } }) => colors.green};
  }

  .red {
    margin-left: 8px;
    color: ${({ theme: { colors } }) => colors.lightRed};
  }
`;

const ListItemImage = styled.div`
  float: left;
  height: 75px;
  width: 100px;
  margin-right: 12px;
  cursor: pointer;

  img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
    transition: transform 0.4s ease 0s;

    &:hover {
      transform: scale(1.05);
    }
  }
`;

export default ListPanel;
