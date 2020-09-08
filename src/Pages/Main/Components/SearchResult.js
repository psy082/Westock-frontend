import React from "react";
import styled from "styled-components";
import LinkIcon from "./LinkIcon";

const SearchResult = ({ resultData, resultCount }) => {
  return (
    <ResultContainer>
      <ResultHeader>PRESS ENTER TO SEARCH</ResultHeader>
      <ResultCategory>
        <div>
          <ResultText>{resultCount}</ResultText> results found in
          <ResultText> Sneakers</ResultText>
        </div>
        <LinkIcon />
      </ResultCategory>
      {resultData.map((el) => {
        return (
          <ResultItem key={el.id}>
            <ResultList>
              <Result left>
                <ResultImg src={el.image_url} />
              </Result>
              <Result right>
                <ItemBrand>{el.sub_category}</ItemBrand>
                <ItemTitle>{el.name}</ItemTitle>
                <ItemTitle sub>{el.colorway}</ItemTitle>
              </Result>
            </ResultList>
          </ResultItem>
        );
      })}
    </ResultContainer>
  );
};

const ResultContainer = styled.div`
  position: relative;
  ${(props) => props.theme.flexColumn};
  width: inherit;
  max-height: 580px;
  margin: 0 auto;
  font: 400 16px "proxima-nova, sans-serif";
  text-align: left;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 0 4px 3px 0 hsla(0, 0%, 72.2%, 0.6);
  overflow-y: auto;
  z-index: 9999;
`;

const ResultHeader = styled.div`
  height: 10px;
  margin-top: 5px;
  padding-left: 15px;
  font-size: 11px;
  font-weight: 700;
  color: #cecece;
`;

const ResultCategory = styled.div`
  display: flex;
  justify-content: space-between;
  height: 53px;
  padding: 16px;
  border-right: 8px solid ${(props) => props.theme.colors.white};
  border-bottom: 1px solid #ddd;
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    border-right: 8px solid ${(props) => props.theme.colors.green};
  }
`;

const ResultText = styled.span`
  font-weight: 700;
`;

const ResultItem = styled.div`
  display: flex;
  justify-content: space-between;
  height: 143px;
  padding: 16px;
  border-right: 8px solid ${(props) => props.theme.colors.white};
  border-bottom: 1px solid #ddd;
  transition: all 0.2s;
  &:hover {
    border-right: 8px solid #08a05c;
    opacity: 100%;
  }
  cursor: pointer;
`;

const ResultList = styled.ul`
  display: flex;
`;

const Result = styled.li`
  ${(props) => props.theme.flexColumn};
  text-transform: uppercase;
  margin: auto;
`;

const ResultImg = styled.img`
  width: 125px;
  height: 89.16px;
  margin-right: 20px;
`;

const ItemBrand = styled.span`
  font: 400 14px;
  line-height: 18px;
`;
const ItemTitle = styled.span`
  font: ${(props) => (props.sub ? "600 16px ''" : "700 24px ''")};
  letter-spacing: -2px;
  -webkit-font-smoothing: antialiased;
`;

export default SearchResult;
