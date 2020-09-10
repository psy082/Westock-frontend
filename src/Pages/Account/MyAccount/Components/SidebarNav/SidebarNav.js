import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function SidebarNav(props) {
  const {
    sidebarImg,
    sidebarTitle,
    sidebarDescription,
    activeTab,
    handleOnClick,
  } = props;

  return (
    <SidebarNavComp
      onClick={() => handleOnClick(sidebarTitle)}
      clicked={activeTab === sidebarTitle}
    >
      <Link to="/account" />
      <MenuItemWrapper>
        <LeftImg alt="icon" src={sidebarImg} />
        <RightContent>
          <MenuTitle>{sidebarTitle}</MenuTitle>
          <MenuDescription>{sidebarDescription}</MenuDescription>
        </RightContent>
      </MenuItemWrapper>
    </SidebarNavComp>
  );
}

const SidebarNavComp = styled.div`
  padding: 13px;
  cursor: pointer;
  background-color: ${(props) => (props.clicked ? "#ffff" : "#f5f5f5")};
  &:hover {
    background-color: #95a5a6;
  }
`;

const MenuItemWrapper = styled.div`
  display: flex;
  overflow: hidden;
`;

const LeftImg = styled.img`
  width: 32px;
  margin-right: 14px;
`;

const RightContent = styled.div`
  display: inherit;
  flex-direction: column;
`;

const MenuTitle = styled.p`
  margin-bottom: 5px;
  line-height: 19px;
  font-weight: 500;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.87);
  letter-spacing: -0.4px;
`;

const MenuDescription = styled.p`
  color: rgb(111, 111, 111);
  font-weight: 300;
  font-size: 12px;
  letter-spacing: 0px;
  line-height: 17px;
`;
export default SidebarNav;
