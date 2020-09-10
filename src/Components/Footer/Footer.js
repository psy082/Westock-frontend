import React from "react";
import styled from "styled-components";
import ProductsLink from "./ProductsLink/ProductsLink";
import Connections from "./Connections/Connections";
import Informations from "./Informations/Informations";

function Footer() {
  return (
    <Container>
      <ProductsLink />
      <BorderLine />
      <Connections />
      <Informations />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  bottom: 0;
  width: 100%;
  padding-top: 20px;
  background-position: top center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #3d3d3d;
  color: #d3d3d3;
  z-index: 2;
`;

const BorderLine = styled.hr`
  size: 1px;
  border-color: #808080;
  margin: 0px;
`;

export default Footer;
