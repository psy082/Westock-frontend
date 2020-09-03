import React, { Component } from "react";
import styled from "styled-components";
import SearchIcon from "./SearchIcon";

export default class Search extends Component {
  render() {
    return (
      <>
        <SearchIcon />
        <MainSearchInput type="search" placeholder="Search..." />
      </>
    );
  }
}

const MainSearchInput = styled.input`
  width: 640px;
  height: 48px;
  padding-left: 60px;
  border: none;
  border-radius: 2px;
  &::-webkit-search-cancel-button {
    position: relative;
    right: 10px;
  }
  &::placeholder {
    font-size: 15px;
    color: rgb(100, 100, 100);
  }
`;
