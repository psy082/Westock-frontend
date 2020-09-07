import React from "react";
import styled from "styled-components";

export default function FollowPopUp({
  sizeList,
  followList,
  sizesToFollow,
  isPopUpActive,
  followExplanation,
  handleFollowPopUp,
}) {
  const handleClick = (idx) => {
    sizesToFollow(idx);
  };
  return (
    <PopUp isPopUpActive={isPopUpActive} followExplanation={followExplanation}>
      <Fin />
      <Content>
        <h1>U.S. Men's size</h1>
        <SizeSelect>
          {sizeList.slice(1).map((el, idx) => (
            <SizeBtn
              isClicked={followList.includes(idx + 1)}
              followList={followList}
              onClick={() => isPopUpActive && handleClick(idx + 1)}
            >
              {el.size}
            </SizeBtn>
          ))}
        </SizeSelect>
        <DoneBtn onClick={() => handleFollowPopUp()}>done</DoneBtn>
      </Content>
    </PopUp>
  );
}

const PopUp = styled.div`
  ${({ theme }) => theme.flexColumnCenter};
  position: absolute;
  top: 60px;
  right: 340px;
  width: 280px;
  margin-top: 25px;
  box-shadow: 0 4px 3px 0 hsla(0, 0%, 72.2%, 0.6);
  background: #fff;
  z-index: 3;
  visibility: ${({ isPopUpActive, followExplanation }) =>
    !followExplanation && isPopUpActive ? "visible" : "hidden"};
  opacity: ${({ isPopUpActive }) => (isPopUpActive ? "1" : "0")};
  transition: opacity 1s ease,
    visibility 0s ease ${({ isPopUpActive }) => (isPopUpActive ? "0s" : "1s")};
`;

const Fin = styled.div`
  &::before {
    content: " ";
    position: absolute;
    right: 17px;
    top: -14px;
    border-style: solid;
    border-width: 0px 25px 25px;
    border-color: transparent transparent #f5f5f5;
    z-index: 2;
  }
  &::after {
    content: " ";
    position: absolute;
    right: 25px;
    top: -16px;
    border-style: solid;
    border-width: 0px 17px 17px;
    border-color: transparent transparent #f5f5f5;
    z-index: 1;
  }
`;

const Content = styled.div`
  ${({ theme }) => theme.flexColumnCenter};
  width: 100%;
  padding: 5px 5px 5px 9px;
  background-color: #f5f5f5;

  img {
    width: 180px;
    margin-bottom: 37px;
  }

  h1 {
    margin: 5px 11px;
    text-align: center;
    text-transform: uppercase;
    font: 700 14px;
  }
`;

const SizeSelect = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
`;

const SizeBtn = styled.button`
  ${({ theme }) => theme.flexCenter};
  height: 55px;
  width: 23%;
  margin: 2px;
  background-color: ${({ isClicked }) => (isClicked ? "#2e2e2e" : "#fff")};
  color: ${({ isClicked }) => (isClicked ? "#fff" : "black")};
  font: 400 20px "Bebas Neue", cursive;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.textDarkGrey};
  }
`;

const DoneBtn = styled.button`
  width: 100%;
  padding: 15px 16px 12px;
  margin: 10px auto;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.green};
  color: #fff;
  letter-spacing: 2px;
  text-transform: uppercase;
  font: 400 22px "Bebas Neue", cursive;

  &:hover {
    background-color: #066f40;
  }
`;
