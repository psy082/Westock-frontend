import React, { Component } from "react";
import Nav from "./Components/Nav/Nav";
import Tab from "./Components/Tab/Tab";
import styled from "styled-components";

class Login extends Component {
  render() {
    return (
      <>
        <Nav />
        <LoginPage>
          <LoginWrapper>
            <LoginBody>
              <Tab />
            </LoginBody>
          </LoginWrapper>
        </LoginPage>
      </>
    );
  }
}

const LoginPage = styled.div`
  background-color: ${(props) => props.theme.colors.lightGrey};
  ${(props) => props.theme.flexCenter}
`;

const LoginWrapper = styled.div`
  width: 400px;
  height: 100vh;
  padding-top: 80px;
`;

const LoginBody = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid #e0e0e0;
  border-radius: 4.5px;
`;

export default Login;
