import React, { Component } from "react";
import { API_REGISTER } from "../../../../../config";
import EyeSlash from "../../Components/SocialLoginIcon/EyeSlash";
import styled from "styled-components";

class SignUpContent extends Component {
  state = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    checked: false,
  };

  handleOnclick = () => {
    this.setState({ checked: !this.state.checked });
    console.log(this.state.first_name, this.state.last_name);
    fetch(`${API_REGISTER}`, {
      method: "POST",
      body: JSON.stringify({
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.message === "SUCCESS") {
          alert("회원가입 성공");
          this.props.history.push("/");
        } else {
          alert("회원가입 실패");
        }
        console.log(response);
      });
  };

  render() {
    return (
      <>
        <LoginForm>
          <FormRow>
            <Input
              onChange={this.handleOnChange}
              name="firstname"
              placeholder="First Name"
            />
          </FormRow>
          <FormRow>
            <Input
              onChange={this.handleOnChange}
              name="lastname"
              placeholder="Last Name"
            />
          </FormRow>
          <FormRow>
            <Input
              onChange={this.handleOnChange}
              name="email"
              type="email"
              placeholder="Email Address"
            />
          </FormRow>
          <FormRow>
            <PasswordWrapper>
              <PasswordInput
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
          <ButtonForgotPw>
            <PasswordText>
              At least 8 characters, 1 uppercase letter, 1 number & 1 symbol
            </PasswordText>
          </ButtonForgotPw>
        </Div>
        <TermsWrapper>
          <TermsCheckBox />
          <CheckMark
            onClick={this.handleOnclick}
            checked={this.state.checked}
          />
          <TermsText>
            By signing up, you agree to the&nbsp;<Span>Terms of Service</Span>
            &nbsp; and<br></br>
            <Span>Privacy Policy</Span>
          </TermsText>
        </TermsWrapper>
        <ButtonSignUp onClick={this.handleOnclick}>Sign Up</ButtonSignUp>
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
  border-radius: 2px;
  border: 1px solid #e5e7ea;
`;

const Input = styled.input`
  width: 352px;
  height: 48px;
  margin: 0px 6px;
  padding: 16px 10px 5px;
  border: 0px;

  &::placeholder {
    color: ${(props) => props.theme.colors.textGrey};
  }
`;

const PasswordWrapper = styled.div`
  display: flex;
`;

const PasswordInput = styled.input`
  width: 310px;
  height: 48px;
  margin: 0px 6px;
  padding: 16px 10px 5px;
  border: 0px;

  &::placeholder {
    color: ${(props) => props.theme.colors.textGrey};
  }
`;

const PasswordToggle = styled.button`
  padding-right: 16px;
  color: #949494;
`;

const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 12px;
  margin-bottom: 2px;
`;

const ButtonForgotPw = styled.button`
  margin: 0 0 24px 0;
  color: #0f0f0f;
  font-size: 12px;
`;

const PasswordText = styled.p`
  color: ${(props) => props.theme.colors.textBlack};
  font-weight: bold;
`;

const TermsWrapper = styled.div`
  display: flex;
  margin-bottom: 18px;
  margin-left: 18px;
  color: #949494;
  font-size: 12px;
  font-weight: 500;
`;

const TermsText = styled.p`
  font-size: 12px;
`;

const TermsCheckBox = styled.input`
  position: absolute;
  margin-top: 4px;
  opacity: 0;
`;

const CheckMark = styled.label`
  display: inline-block;
  position: relative;
  font-weight: 700;
  cursor: pointer;

  &:before {
    display: inline-block;
    width: 16px;
    height: 16px;
    margin-right: 10px;
    background: #fafafa;
    border-radius: 2px;
    border: solid 1px #e0e0e0;
    vertical-align: text-top;
    content: "";
  }

  ${(props) =>
    props.checked &&
    `&:after {
      position: absolute;
      width: 2px;
      height: 2px;
      top: 7px;
      left: 3px;
      background: #0f0f0f;
      box-shadow: 2px 0 0 #0f0f0f, 4px 0 0 #0f0f0f, 4px -2px 0 #0f0f0f,
        4px -4px 0 #0f0f0f, 4px -6px 0 #0f0f0f, 4px -8px 0 #0f0f0f;
      content: "";
      transform: rotate(45deg);
    }`}
`;

const Span = styled.span`
  color: #0f0f0f;
  font-weight: bold;
`;

const ButtonSignUp = styled.button`
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

export default SignUpContent;
