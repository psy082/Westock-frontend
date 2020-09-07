import React from "react";
import styled from "styled-components";

export default function FollowExplanation({
  followExplanation,
  isPopUpActive,
  handleFollowExp,
}) {
  const isVisible = isPopUpActive && followExplanation;
  return (
    <PopUp isVisible={isVisible}>
      <Fin />
      <Content>
        <img
          src="https://stockx-assets.imgix.net/png/icons/megaphone.png?auto=compress,format"
          alt="megaphone"
        />
        <h1>we'll alert you when the price of this item changes</h1>
        <p>
          You can modify your notification preferences on your{" "}
          <span>settings page</span>.
        </p>
        <GotItBtn onClick={() => handleFollowExp()}>got it</GotItBtn>
      </Content>
    </PopUp>
  );
}

const PopUp = styled.div`
  position: absolute;
  top: 60px;
  right: 340px;
  ${({ theme }) => theme.flexColumnCenter};
  width: 280px;
  margin-top: 25px;
  background: #fff;
  box-shadow: 0 4px 3px 0 hsla(0, 0%, 72.2%, 0.6);
  z-index: 4;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: opacity 1s ease,
    visibility 0s ease ${({ isVisible }) => (isVisible ? "0s" : "1s")};
`;

const Fin = styled.div`
  &::before {
    content: " ";
    position: absolute;
    right: 17px;
    top: -14px;
    border-style: solid;
    border-width: 0px 25px 25px;
    border-color: transparent transparent #fff;
    z-index: 2;
  }
  &::after {
    content: " ";
    position: absolute;
    right: 25px;
    top: -16px;
    border-style: solid;
    border-width: 0px 17px 17px;
    border-color: transparent transparent #cecece;
    z-index: 1;
  }
`;

const Content = styled.div`
  ${({ theme }) => theme.flexColumnCenter};
  width: 100%;
  padding: 36px 15px 5px;
  border: 1px solid #cecece;

  img {
    width: 180px;
    margin-bottom: 37px;
  }

  h1 {
    text-align: center;
    text-transform: uppercase;
    font: 400 22px "Bebas Neue", cursive;
    margin-bottom: 11px;
  }

  p {
    text-align: center;
    margin-bottom: 41px;

    span {
      color: ${({ theme }) => theme.colors.green};
    }
  }
`;

const GotItBtn = styled.button`
  font: 400 22px "Bebas Neue", cursive;
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 15px 16px 12px;
  margin-bottom: 30px;
  border-radius: 5px;
  color: #fff;
  background-color: ${({ theme }) => theme.colors.green};

  &:hover {
    background-color: #066f40;
  }
`;
