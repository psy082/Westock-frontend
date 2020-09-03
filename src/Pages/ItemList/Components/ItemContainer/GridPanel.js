import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SORT_KEY } from "../../itemData";

function GridPanel({ products, sort, getSortText }) {
  return (
    <GridContainer>
      {products.map(({ title, releaseDate, market, media: { imageUrl } }) => (
        <ProductContainer key={title}>
          <ProductWrapper>
            <ProductLink to="#">
              <ProductImageWrapper>
                <ProductImage
                  alt={title}
                  src={imageUrl}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/Images/empty_item.jpg";
                  }}
                />
              </ProductImageWrapper>
              <ProductDescWrapper>
                <ProductTitle>
                  {title.length < 45
                    ? title
                    : title.substring(0, title.indexOf("("))}
                </ProductTitle>
                <div>
                  <ProductPriceName>
                    {sort === "highest_bid" ? "highest bid" : "lowest ask"}
                  </ProductPriceName>
                  <ProductPrice>{"$" + market.lowestAsk}</ProductPrice>
                </div>
                {sort === "lowest_ask" ? (
                  sort === "highest_bid" ? (
                    <></>
                  ) : (
                    <></>
                  )
                ) : (
                  <ProductSortText>
                    {getSortText(
                      "grid",
                      sort,
                      sort === "release_date"
                        ? releaseDate
                        : market[SORT_KEY[sort]]
                    )}
                  </ProductSortText>
                )}
              </ProductDescWrapper>
            </ProductLink>
          </ProductWrapper>
        </ProductContainer>
      ))}
    </GridContainer>
  );
}

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const ProductContainer = styled.div`
  width: 25%;
  padding: 0 8px 16px;
`;

const ProductWrapper = styled.div`
  position: relative;
  max-width: 100%;
  border: #fafafa 2px solid;
  border-radius: 3px;
  color: #000;
  text-align: left;
`;

const ProductLink = styled(Link)`
  color: black;
  text-decoration: none;
  cursor: pointer;
`;

const ProductImageWrapper = styled.div`
  position: relative;
  padding-top: 58%;
  margin: 16px;
`;

const ProductImage = styled.img`
  max-width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  vertical-align: middle;
  transition: transform 0.4s ease 0s;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductDescWrapper = styled.div`
  background-color: #fafafa;
  padding: 16px;
  text-align: left;
`;

const ProductTitle = styled.div`
  height: 38px;
  overflow: hidden;
  margin-bottom: 6px;
`;

const ProductPriceName = styled.div`
  font-family: sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  color: rgba(0, 0, 0, 0.5);
  text-transform: capitalize;
`;

const ProductPrice = styled.div`
  font-family: sans-serif;
  font-weight: 700;
  font-size: 22px;
  line-height: 1.3;
`;

const ProductSortText = styled.div`
  font-family: sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.3;
  color: rgba(0, 0, 0, 0.5);
  text-transform: capitalize;
`;

export default GridPanel;
