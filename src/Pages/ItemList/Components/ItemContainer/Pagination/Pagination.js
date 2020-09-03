import React from "react";
import styled from "styled-components";
import PrevButton from "../../Buttons/PrevButton";
import NextButton from "../../Buttons/NextButton";

function Pagination({ page, lastPage, setSubFilter }) {
  return (
    <PageContainer>
      <PageWrapper>
        <PointerButton
          disabled={page === 1}
          onClick={() => setSubFilter("page", page - 1)}
        >
          <PrevButton />
        </PointerButton>
        {getPageBlocks(page, getPageText(page, lastPage), setSubFilter)}
        <PointerButton
          disabled={page === lastPage}
          onClick={() => setSubFilter("page", page + 1)}
        >
          <NextButton />
        </PointerButton>
      </PageWrapper>
    </PageContainer>
  );
}

export default Pagination;

const PageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PageWrapper = styled.ul`
  ${({ theme }) => theme.flexCenter};
  width: 294px;
  height: 42px;
  padding-top: 10px;
  margin: auto;
  font-family: sans-serif;
  font-size: 12px;
  text-align: center;

  .ellipsis {
    border: none;
    background-color: #ffffff;
    color: #949494;
    width: 14px;
    margin: 4px;
    padding: 0px;
    cursor: default;
  }
`;

const PointerButton = styled.button`
  background-color: #ffffff;
  border: none;
  height: 32px;
  width: 16px;
  padding: 9px 4px;
  margin: 0px 2px;
  outline: none;

  &:disabled {
    cursor: default;

    svg {
      fill: gray;
    }
  }

  &:not([disabled]):hover {
    svg {
      fill: ${({ theme: { colors } }) => colors.textBlack};
    }
  }
`;

const PageButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: 3px;
  margin: 0px 5px;
  color: #616161;
  background-color: #fafafa;
  transition: all 0.1s ease 0s;

  &.active {
    color: ${({ theme: { colors } }) => colors.white};
    background: ${({ theme: { colors } }) => colors.green};
  }

  &:hover {
    border: 2px solid #08a05c;
    background-color: #ffffff;
    color: #08a05c;
  }
`;

const getPageText = (page, lastPage) => {
  if (lastPage <= 5) {
    return [
      ...Array(lastPage)
        .fill()
        .map((_, index) => index + 1),
    ];
  }
  if (page > 0 && page < 5) {
    return [
      ...Array(4)
        .fill()
        .map((_, index) => index + 1),
      "...",
      lastPage,
    ];
  }
  if (page > lastPage - 4 && page <= lastPage) {
    return [
      1,
      "...",
      ...Array(4)
        .fill()
        .map((_, index) => lastPage - 3 + index),
    ];
  }
  return [
    1,
    "...",
    ...Array(3)
      .fill()
      .map((_, index) => page - 1 + index),
    "...",
    lastPage,
  ];
};

const getPageBlocks = (page, pageText, filter) => {
  return pageText.map((text) =>
    isNaN(text) ? (
      <div key={`page${text}ellip`} className="ellipsis">
        ...
      </div>
    ) : (
      <PageButton
        key={`page${text}`}
        className={page === text ? "active" : ""}
        onClick={() => filter("page", text)}
      >
        {text}
      </PageButton>
    )
  );
};
