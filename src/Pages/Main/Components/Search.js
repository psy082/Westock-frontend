import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import SearchIcon from "./SearchIcon";
import SearchResult from "./SearchResult";
import NoResult from "./NoResult";
import { API } from "./Config";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const [resultData, setResultData] = useState([]);
  const [resultCount, setResultCount] = useState();
  const history = useHistory();
  const handleInput = (e) => {
    setInputValue(e.target.value);
    searchFetch(e);
  };

  const searchFetch = (e) => {
    fetch(`${API}/sale/search`, {
      method: "POST",
      body: JSON.stringify({
        search_term: e.target.value,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
        } else {
          setResultCount(res.count);
          setResultData(res.results);
        }
      });
  };

  const goToResult = (e) => {
    if (e.key === "Enter" && inputValue.length > 0) {
      history.push(`sneakers/${inputValue}`);
    }
  };

  return (
    <Label>
      <SearchIcon />
      <MainSearchInput
        type="search"
        placeholder="Search..."
        onChange={handleInput}
        onKeyPress={goToResult}
        value={inputValue}
      />
      {inputValue && resultData.length > 0 && (
        <SearchResult resultData={resultData} resultCount={resultCount} />
      )}
      {inputValue && resultData.length === 0 && <NoResult />}
    </Label>
  );
};

const Label = styled.span`
  width: 640px;
  text-align: center;
`;
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

export default Search;
