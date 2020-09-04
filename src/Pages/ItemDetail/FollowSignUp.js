import React from "react";
import styled from "styled-components";

export default function FollowSignUp() {
  return (
    <PopUp>
      <Fin></Fin>
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
        <button>got it</button>
      </Content>
    </PopUp>
  );
}

const PopUp = styled.div`
  position: relative;
  ${(props) => props.theme.flexColumnCenter};
  width: 280px;
  margin-top: 25px;
  box-shadow: 0 4px 3px 0 hsla(0, 0%, 72.2%, 0.6);
`;

const Fin = styled.div`
  &::before {
    content: " ";
    position: absolute;
    right: 170px;
    top: 300px;
    border-style: solid;
    border-width: 0px 25px 25px;
    border-color: transparent transparent white;
    z-index: 2;
  }
`;

const Content = styled.div`
  ${(props) => props.theme.flexColumnCenter};
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
      color: ${(props) => props.theme.colors.green};
    }
  }

  button {
    font: 400 22px "Bebas Neue", cursive;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 15px 16px 12px;
    margin-bottom: 30px;
    border-radius: 5px;
    color: #fff;
    background-color: ${(props) => props.theme.colors.green};
  }
`;
