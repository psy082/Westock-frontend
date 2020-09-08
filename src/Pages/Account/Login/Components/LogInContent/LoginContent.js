import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { API_LOGIN } from "../../../../../config";
import EyeSlash from "../../Components/SocialLoginIcon/EyeSlash";
import styled from "styled-components";

class LoginContent extends Component {
  state = {
    email: "",
    password: "",
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleOnclick = (e) => {
    fetch(`${API_LOGIN}`, {
      method: "POST",
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.ACCESS_TOKEN) {
          alert("로그인 성공");
          console.log(response);
          sessionStorage.setItem("ACCESS_TOKEN", response.ACCESS_TOKEN);
          this.props.history.push("/");
        } else {
          alert("로그인 실패");
        }
      });
  };

  render() {
    console.log(this.state);
    return (
      <>
        <LoginForm>
          <FormRow>
            <EmailLoginInput
              onChange={this.handleOnChange}
              name="email"
              placeholder="Email Address"
            />
          </FormRow>
          <FormRow>
            <PasswordWrapper>
              <PasswordLoginInput
                onChange={this.handleOnChange}
                name="password"
                type="password"
                placeholder="Password"
              />
              <PasswordToggle>
                <EyeSlash />
              </PasswordToggle>
            </PasswordWrapper>
          </FormRow>
        </LoginForm>
        <Div>
          <ButtonForgotPw>Forgot Password?</ButtonForgotPw>
        </Div>
        <ButtonLogin onClick={this.handleOnclick}>Log In</ButtonLogin>
        <TermsContainer>
          <TermsForm>
            By loggin in, you agree to the&nbsp;<P>Terms of Service</P>&nbsp;
            and&nbsp;
            <P>Privacy Policy</P>
          </TermsForm>
        </TermsContainer>
      </>
    );
  }
}

const LoginForm = styled.div`
  ${(props) => props.theme.flexColumnCenter};
  position: relative;
  margin-top: 8px;
`;

const FormRow = styled.div`
  position: relative;
  margin-bottom: 8px;
  border: 1px solid #e5e7ea;
  border-radius: 2px;
`;

const EmailLoginInput = styled.input`
  width: 352px;
  height: 48px;
  margin: 0px 6px;
  padding: 16px 10px 5px;
  border: 0px;
`;

const PasswordWrapper = styled.div`
  display: flex;
`;

const PasswordLoginInput = styled.input`
  width: 310px;
  height: 48px;
  margin: 0px 6px;
  padding: 16px 10px 5px;
  border: 0px;
`;

const PasswordToggle = styled.button`
  color: #949494;
  padding-right: 16px;
`;

const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
`;

const ButtonForgotPw = styled.button`
  margin-bottom: 24px;
  color: #0f0f0f;
  font-size: 12px;
`;

const ButtonLogin = styled.button`
  text-align: center;
  min-width: 366px;
  height: 50px;
  margin: 0 16px;
  margin-bottom: 10px;
  background: #c7c7c7;
  color: #fff;
  font-size: 14px;
  border: none;
  border-radius: 4px;
  letter-spacing: 0.5px;
`;

const TermsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`;

const TermsForm = styled.div`
  display: flex;
  margin-bottom: 12px;
  padding: 0px;
  color: #949494;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
`;

const P = styled.p`
  color: #0f0f0f;
  font-weight: bold;
`;

export default withRouter(LoginContent);
