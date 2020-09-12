import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SignUpModal({
  isActive,
  handleModal,
  isLoggedin,
  handleSalesModal,
  salesModalActive,
}) {
  const closeModal = () => {
    isActive ? handleModal() : handleSalesModal();
  };

  return (
    <Modal
      isActive={isActive}
      isLoggedin={isLoggedin}
      salesModalActive={salesModalActive}
      handleSalesModal={handleSalesModal}
    >
      <BackDrop isActive={isActive} onClick={closeModal} />
      <Body isActive={isActive}>
        <Img>
          <img
            src="https://stockx-assets.imgix.net/png/icons/charts.png?auto=compress,format"
            alt="stock chart"
          />
          <CloseBtn onClick={closeModal}>X</CloseBtn>
        </Img>
        <p>Sign up for free to view all recent sales data</p>
        <SignUpBtn>
          <Link to="/account/login">SIGNUP</Link>
        </SignUpBtn>
        <LogInBtn>
          <Link to="/account/login">or login</Link>
        </LogInBtn>
      </Body>
    </Modal>
  );
}

const Modal = styled.div`
  visibility: ${({
    isActive,
    isLoggedin,
    salesModalActive,
    handleSalesModal,
  }) => (!isLoggedin && (isActive || salesModalActive) ? "visible" : "hidden")};
  position: relative;
  ${({ theme }) => theme.flexColumnCenter};
  transition: visibility 0s ease ${({ isActive }) => (isActive ? "0s" : "0.2s")};
`;

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #000;
  opacity: ${({ isActive }) => (isActive ? "0.5" : "0")};
  z-index: 3;
  transition: opacity 0.3s ease 0s;
`;

const Body = styled.div`
  ${({ theme }) => theme.flexColumnCenter};
  position: fixed;
  top: 20%;
  right: 39%;
  width: 400px;
  min-height: 175px;
  padding: 15px;
  border-radius: 8px;
  background-color: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  z-index: 3;
  transform: ${({ isActive }) =>
    isActive ? "translate(0);" : "translateY(-25%);"};
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  transition: transform 0.2s ease-out, opacity 0.2s ease-out;

  p {
    font-size: 26px;
    font-weight: 500;
    text-align: center;
  }
`;

const Img = styled.div`
  ${({ theme }) => theme.flexCenter};
  width: 100%;
  padding: 20px 0;
  position: relative;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 19px;
  opacity: 0.2;

  &:hover {
    opacity: 1;
  }
`;

const SignUpBtn = styled.button`
  padding: 15px 16px 12px;
  margin: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.green};
  font: 400 26px "Bebas Neue", cursive;
  letter-spacing: 2.5px;

  a {
    color: #fff;
  }

  &:hover {
    background-color: #066f40;
  }
`;

const LogInBtn = styled.button`
  text-align: center;
  font-size: 14px;

  a {
    color: #00bbe3;

    &:hover {
      color: #007c96;
    }
  }
`;
