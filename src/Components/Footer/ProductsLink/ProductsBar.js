import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ProductsBar({ title, items }) {
  return (
    <Container>
      <List>
        <Title>{title}</Title>
        {items.map((item) => (
          <Item>
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

  a {
    color: #ffffff;
  }
`;

const Item = styled.li`
  padding-top: 8px;
  font-size: 13px;
  text-transform: capitalize;

  a {
    color: #808080;
  }
`;

export default ProductsBar;
