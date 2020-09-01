import React, { Component } from "react";
import styled from "styled-components";
import SignUpContent from "../SignUpContent/SignUpContent";
import LoginContent from "../LogInContent/LoginContent";
import SocialLogin from "../SocialLogin/SocialLogin";
import EmailOption from "../EmailOption/EmailOption";

class Tab extends Component {
  state = {
    activeTab: 0,
  };

  handleOnClick = (id) => {
    this.setState({ activeTab: id });
  };

  render() {
    return (
      <>
        <TabWrapper>
          <Button
            onClick={() => this.handleOnClick(0)}
            clicked={this.state.activeTab === 0}
          >
            Sign Up
          </Button>
          <Button
            onClick={() => this.handleOnClick(1)}
            clicked={this.state.activeTab === 1}
          >
            Log In
          </Button>
        </TabWrapper>
        <SocialLoginContainer>
          <SocialLogin />
          <EmailOption />
        </SocialLoginContainer>
        <Contents>
          {this.state.activeTab === 0 ? <SignUpContent /> : <LoginContent />}
        </Contents>
      </>
    );
  }
}

const TabWrapper = styled.div`
  ${(props) => props.theme.flexCenter}
  height: 50px;
  margin: 6px 16px 0px 16px;
`;

const Button = styled.button`
  width: 50%;
  padding: 14px;
  border-bottom: ${(props) =>
    props.clicked ? "2px solid #08a05c" : "2px solid #e0e0e0"};
  color: #616161;
  font-size: 14px;
`;

const SocialLoginContainer = styled.div`
  padding: 16px;
`;

const Contents = styled.div``;

export default Tab;
