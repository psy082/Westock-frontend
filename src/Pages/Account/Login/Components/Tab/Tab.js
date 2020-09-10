import React, { useState } from "react";
import styled from "styled-components";
import SignUpContent from "../SignUpContent/SignUpContent";
import LoginContent from "../LogInContent/LoginContent";
import SocialLogin from "../SocialLogin/SocialLogin";
import EmailOption from "../EmailOption/EmailOption";

function Tab() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <TabWrapper>
        <Button onClick={() => setActiveTab(0)} clicked={activeTab === 0}>
          Sign Up
        </Button>
        <Button onClick={() => setActiveTab(1)} clicked={activeTab === 1}>
          Log In
        </Button>
      </TabWrapper>
      <SocialLoginContainer>
        <SocialLogin />
        <EmailOption />
      </SocialLoginContainer>
      <Contents>
        {activeTab === 0 ? <SignUpContent /> : <LoginContent />}
      </Contents>
    </>
  );
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
