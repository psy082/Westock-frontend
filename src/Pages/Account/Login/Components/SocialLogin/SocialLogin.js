import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { JS_KEY } from "../../../../../config";
import SocialIconGoogle from "../SocialLoginIcon/SocialIconGoogle";
import SocialIconGithub from "../SocialLoginIcon/SocialIconGithub";
import SocialIconFacebook from "../SocialLoginIcon/SocialIconFacebook";
import SocialIconKakao from "../SocialLoginIcon/SocialIconKakao";
import styled from "styled-components";

class SocialLogin extends Component {
  loginWithKakao = () => {
    window.Kakao.Auth.login({
      success: (authObj) => {
        console.log(authObj);
        fetch("http://192.168.0.10:8000/users/sign-in/kakao", {
          method: "POST",
          body: JSON.stringify({
            access_token: authObj.access_token,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res.ACCESS_TOKEN);
            localStorage.setItem("ACCESS_TOKEN", res.ACCESS_TOKEN);
            alert("로그인에 성공하였습니다");
            this.props.history.push("/");
          });
      },
    });
  };

  componentDidMount() {
    window.Kakao.init(JS_KEY);
    console.log(window.Kakao.isInitialized());
    console.log(window.Kakao);
  }

  render() {
    return (
      <SocialLoginWrapper>
        <Button>
          <SocialIconGoogle />
          Continue with Google
        </Button>
        <Button>
          <SocialIconGithub />
          Continue with Github
        </Button>
        <Button>
          <SocialIconFacebook />
          Continue with Facebook
        </Button>
        <Button onClick={() => this.loginWithKakao()}>
          <SocialIconKakao />
          Continue with KakaoTalk
        </Button>
      </SocialLoginWrapper>
    );
  }
}

const SocialLoginWrapper = styled.div`
  ${(props) => props.theme.flexRowCenter}
  width: 100%;
  flex-flow: column wrap;
  text-align: center;
`;

const Button = styled.button`
  min-width: 50px;
  height: 50px;
  padding: 4px;
  margin: 4px 2px;
  background-color: ${(props) => props.theme.colors.white};
  color: #0f0f0f;
  font-size: 16px;
  border: 1px solid #0f0f0f;
  border-radius: 4.5px;
  cursor: pointer;
`;

export default withRouter(SocialLogin);
