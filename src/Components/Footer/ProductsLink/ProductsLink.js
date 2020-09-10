import React from "react";
import styled from "styled-components";
import ProductsBar from "./ProductsBar";
import { PRODUCTS_LINK } from "../FooterData";

function ProductsLink() {
  return (
    <Container>
      <Wrapper>
        {Object.entries(PRODUCTS_LINK).map(([key, value]) => (
          <ProductsBar key={key} title={key} items={value} />
        ))}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 1350px;
  margin: auto;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  padding-top: 14px;
  margin-bottom: 20px;
`;

export default ProductsLink;
