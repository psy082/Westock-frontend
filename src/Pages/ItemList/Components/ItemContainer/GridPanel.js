import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { SORT_KEY } from "../../itemData";

function GridPanel({ products, sort, getSortText }) {
  return (
    <GridContainer>
      {products?.map((product) => (
        <ProductContainer key={product.product_id}>
          <ProductWrapper>
            <ProductLink to={`/${product.product_id}`}>
              <ProductImageWrapper>
                <ProductImage
                  alt={product.name}
                  src={product.image}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/Images/empty_item.jpg";
                  }}
                />
              </ProductImageWrapper>
              <ProductDescWrapper>
                <ProductTitle>
                  {product.name.length < 45
                    ? product.name
                    : product.name.substring(0, product.name.indexOf("("))}
                </ProductTitle>
                <div>
                  <ProductPriceName>
                    {sort === "highest_bid" ? "highest bid" : "lowest ask"}
                  </ProductPriceName>
                  <ProductPrice>{"$" + product.lowest_ask}</ProductPrice>
                </div>
                {sort === "lowest_ask" ? (
                  sort === "highest_bid" ? (
                    <></>
                  ) : (
                    <></>
                  )
                ) : (
                  <ProductSortText>
                    {getSortText("grid", `${sort}`, product[sort])}
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
