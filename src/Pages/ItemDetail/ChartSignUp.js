import React from "react";
import styled from "styled-components";

export default function ChartSignUp() {
  return (
    <Overlay>
      <PopUp>
        <h1>Sign up for free to view all recent sales data</h1>
        <SignUp>signup</SignUp>
        <LogIn>or login</LogIn>
      </PopUp>
    </Overlay>
  );
}

const Overlay = styled.div`
  position: relative;
  ${(props) => props.theme.flexCenter};
  width: 100%;
  height: 100%;
  background: hsla(0, 0%, 100%, 0.9);
`;

const PopUp = styled.div`
  ${(props) => props.theme.flexColumnCenter};
  width: 80%;
  background: #fff;
  border: 1px solid #cecece;
  border-radius: 3px;
  padding: 10px;
  margin: 20px 0;

  h1 {
    margin: 0 0 11px;
    font-size: 20px;
    font-weight: 600;
  }
`;

const SignUp = styled.button`
  color: #fff;
  background: ${(props) => props.theme.colors.green};
  border-radius: 5px;
  font: 400 20px "Bebas Neue", cursive;
  letter-spacing: 2px;
  padding: 15px 25px 12px;
`;

const LogIn = styled.button`
  color: ${(props) => props.theme.colors.green};
  font-size: 16px;
  margin: 10px 0 -10px;
`;
