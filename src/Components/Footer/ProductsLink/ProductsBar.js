import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ProductsBar({ title, items }) {
  return (
    <Container>
      <List>
        <Title>{title}</Title>
        {items.map((item) => (
          <Item key={`item_title_${item}`}>
            <Link to="#">{item}</Link>
          </Item>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 10px;
  margin-right: 10px;
  font-weight: 600;
`;

const List = styled.ul`
  margin: 0;
  list-style: none;
  padding: 0;

  a {
    text-decoration: none !important;
    cursor: pointer;
  }
`;

const Title = styled.span`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  text-transform: capitalize;
  font-size: 15px;
  margin: 0;

  @media (max-width: 1440px) {
    font-size: 13px;
  }

  a {
    color: #ffffff;
  }
`;

const Item = styled.li`
  padding-top: 12px;
  font-size: 13px;
  text-transform: capitalize;

  @media (max-width: 1440px) {
    font-size: 12px;
  }

  a {
    color: #808080;
  }
`;

export default ProductsBar;
