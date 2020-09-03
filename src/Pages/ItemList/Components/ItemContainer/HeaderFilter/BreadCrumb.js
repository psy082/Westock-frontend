import React from "react";
import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

function BreadCrumb({ category, series, setFilter }) {
  const history = useHistory();
  return (
    <Container>
      <Wrapper>
        <Item>
          <Link
            to="#"
            onClick={() =>
              history.push({
                pathname: "/",
              })
            }
          >
            home
          </Link>
        </Item>
        <Item className="breadcrumb">
          <Link to="#" onClick={() => setFilter("category", "sneakers")}>
            sneakers
          </Link>
        </Item>
        {category === "air jordan" && (
          <Item className="breadcrumb">
            <Link to="#" onClick={() => setFilter("category", "air jordan")}>
              {category}
            </Link>
          </Item>
        )}
        {series && (
          <Item className="breadcrumb">
            <Link to="#">{series}</Link>
          </Item>
        )}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  text-transform: uppercase;
`;

const Wrapper = styled.ul`
  font-size: 12px;
  margin: 10px 0 0;
  padding: 0;
`;

const Item = styled.li`
  display: inline-flex;
  a {
    color: #666;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #2e2e2e;
    }
  }

  &.breadcrumb::before {
    content: "/";
    padding: 0 5px;
    color: #ccc;
  }
`;

export default BreadCrumb;
