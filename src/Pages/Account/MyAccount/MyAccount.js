import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Nav from "../../../Components/Nav/Nav";
import SidebarNav from "./Components/SidebarNav/SidebarNav";
import BuyingContent from "./Components/BuyingContent/BuyingContent";
import SellingContent from "./Components/SellingContent/SellingContent";

function MyAccount() {
  const [activeTab, setActiveTab] = useState("Buying");
  const [sidebarMenus, setSidebarMenus] = useState([]);

  useEffect(() => {
    fetch("/Data/mockSidebarMenu.json")
      .then((res) => res.json())
      .then((res) => {
        setSidebarMenus(res.sidebarMenus);
      });
  }, []);

  const handleOnClick = (id) => {
    setActiveTab(id);
  };

  return (
    <>
      <Nav type="rest" />
      <PageContainer>
        <Sidebar>
          <Gab />
          <UsernameContainer>
            <Username>Daseul Song</Username>
          </UsernameContainer>
          <SidebarNavWrapper>
            {sidebarMenus.map((el) => (
              <SidebarNav
                key={el.sidebarImg}
                sidebarImg={el.sidebarImg}
                sidebarTitle={el.sidebarTitle}
                sidebarDescription={el.sidebarDescription}
                activeTab={activeTab}
                handleOnClick={handleOnClick}
              />
            ))}
          </SidebarNavWrapper>
        </Sidebar>
        <DashboardWrapper>
          {activeTab === "Buying" ? <BuyingContent /> : <SellingContent />}
        </DashboardWrapper>
      </PageContainer>
    </>
  );
}

const PageContainer = styled.div`
  position: relative;
  /* top: 111px; */
  background-color: #ffffff;
`;

const Sidebar = styled.div`
  position: fixed;
  width: 250px;
  height: 100%;
  left: 250px;
  margin-left: -250px;
  background-color: #f5f5f5;
`;

const Gab = styled.div`
  height: 20px;
  background-color: #08a05c;
`;

const UsernameContainer = styled.div`
  top: 0;
  margin-right: 0;
`;

const Username = styled.div`
  padding: 8px 20px 20px 28px;
  font-size: 20pt;
  font-weight: 700;
  letter-spacing: 1px;
`;

const SidebarNavWrapper = styled.ul`
  position: relative;
  top: auto;
  margin-bottom: 4em;
  padding: 0px;
`;

const DashboardWrapper = styled.div`
  margin-top: -20px;
  padding: 15px;
  padding-left: 265px;
`;

export default MyAccount;
