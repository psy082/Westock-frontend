import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FOOTER_INFO, LANG } from "../FooterData";

function Informations() {
  return (
    <Container>
      <Top>
        <InfoContainer>
          {FOOTER_INFO.map((info) => (
            <InfoWrapper key={info}>
              <Link to="#">{info}</Link>
            </InfoWrapper>
          ))}
        </InfoContainer>
      </Top>
      <Bottom>
        <LanguagesBlock>
          {LANG.map((lang) => (
            <Language key={lang}>
              <Link to="#">{lang}</Link>
            </Language>
          ))}
        </LanguagesBlock>
        <Copyright>&copy; 2020 WeStock. All Right Reseved.</Copyright>
      </Bottom>
    </Container>
  );
}

const Container = styled.div`
  background-color: #2d2d2d;
  padding-top: 20px;
  padding-bottom: 44px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1350px;
  margin: auto;

  @media (max-width: 1440px) {
    width: 1140px;
  }
`;

const InfoContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const InfoWrapper = styled.div`
  border-left: 1px solid #808080;

  a {
    padding: 0 8px;
    color: #808080;
    font-size: 12px;
    text-transform: uppercase;
    text-decoration: none !important;
    cursor: pointer;
  }

  &:first-child {
    border-left: none;
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  width: 1350px;
  margin: auto;

  @media (max-width: 1440px) {
    width: 1140px;
  }
`;

const LanguagesBlock = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Language = styled.div`
  a {
    color: #808080;
    text-transform: uppercase;
    text-decoration: underline;
    padding: 0 8px;
    font-size: 12px;
    cursor: pointer;
  }
`;

const Copyright = styled.address`
  padding-top: 0;
  border-top: 0;
  margin-bottom: 0px;
  margin-right: 40px;
  font-size: 12px;
  font-style: normal;
  color: #808080;
  line-height: 1.42857143;
`;

export default Informations;
