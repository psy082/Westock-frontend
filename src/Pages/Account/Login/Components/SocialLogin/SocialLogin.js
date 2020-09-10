<<<<<<< HEAD
import React from "react";
import { withRouter, useHistory } from "react-router-dom";
import { API_LOGIN, GOOGLE_KEY } from "../../../../../config";
import { GoogleLogin } from "react-google-login";
=======
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { JS_KEY } from "../../../../../config";
import { API_KAKAO_LOGIN } from "../../../../../config";
>>>>>>> 7cff373... [송다슬] Refactor: Convert class components to functional components(Hooks)
import SocialIconGoogle from "../SocialLoginIcon/SocialIconGoogle";
import SocialIconGithub from "../SocialLoginIcon/SocialIconGithub";
import SocialIconFacebook from "../SocialLoginIcon/SocialIconFacebook";
import SocialIconKakao from "../SocialLoginIcon/SocialIconKakao";
import { kakaoApi } from "./ApiProcess/ApiProcess";
import styled from "styled-components";

function SocialLogin() {
<<<<<<< HEAD
  const history = useHistory();
  return (
    <SocialLoginWrapper>
      <GoogleLogin
        clientId={GOOGLE_KEY}
        cookiePolicy={"single_host_origin"}
        isSignedIn={false}
        render={(props) => (
          <Button onClick={props.onClick}>
            <SocialIconGoogle />
            Continue with Google
          </Button>
        )}
        onSuccess={({ wc: { access_token } }) =>
          setToken(access_token, "google", history)
        }
      />
=======
  let history = useHistory();
  const loginWithKakao = () => {
    window.Kakao.Auth.login({
      success: (authObj) => {
        console.log(authObj);
        fetch(`${API_KAKAO_LOGIN}`, {
          method: "POST",
          headers: {
            Authorization: authObj.access_token,
          },
        })
          .then((res) => res.json())
          .then((res) => {
            console.log(res.ACCESS_TOKEN);
            localStorage.setItem("ACCESS_TOKEN", res.ACCESS_TOKEN);
            alert("로그인에 성공하였습니다");
            history.push("/");
          });
      },
    });
  };

  useEffect(() => {
    window.Kakao.init(JS_KEY);
    console.log(window.Kakao.isInitialized());
    console.log(window.Kakao);
  }, []);

  return (
    <SocialLoginWrapper>
      <Button>
        <SocialIconGoogle />
        Continue with Google
      </Button>
>>>>>>> 7cff373... [송다슬] Refactor: Convert class components to functional components(Hooks)
      <Button>
        <SocialIconGithub />
        Continue with Github
      </Button>
      <Button>
        <SocialIconFacebook />
        Continue with Facebook
      </Button>
<<<<<<< HEAD
      <Button onClick={() => kakaoApi(setToken, history)}>
=======
      <Button onClick={() => loginWithKakao()}>
>>>>>>> 7cff373... [송다슬] Refactor: Convert class components to functional components(Hooks)
        <SocialIconKakao />
        Continue with KakaoTalk
      </Button>
    </SocialLoginWrapper>
  );
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

<<<<<<< HEAD
const setToken = (access_token, sns, history) => {
  console.log(access_token, sns);
  fetch(`${API_LOGIN}/${sns}`, {
    headers: {
      Authorization: access_token,
    },
  })
    .then((res) => res.json())
    .then((res) => {
      console.log(res.ACCESS_TOKEN);
      localStorage.setItem("ACCESS_TOKEN", res.ACCESS_TOKEN);
      alert("로그인에 성공하였습니다");
      history.push("/");
    });
};

export default withRouter(SocialLogin);
=======
export default SocialLogin;
>>>>>>> 7cff373... [송다슬] Refactor: Convert class components to functional components(Hooks)
