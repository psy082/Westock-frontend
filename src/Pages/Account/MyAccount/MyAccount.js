import React, { Component } from "react";
import SidebarNav from "./Components/SidebarNav/SidebarNav";
import BuyingContent from "./Components/BuyingContent/BuyingContent";
import SellingContent from "./Components/SellingContent/SellingContent";
import styled from "styled-components";

class MyAccount extends Component {
  state = {
    activeTab: "Buying",
    sidebars: [
      {
        sidebarImg:
          "https://stockx-assets.imgix.net/png/icons/security.svg?auto=compress,format",
        sidebarTitle: "Security",
        sidebarDescription: "Two-Step Verification",
      },
      {
        sidebarImg:
          "https://stockx-assets.imgix.net/png/icons/buying.svg?auto=compress,format",
        sidebarTitle: "Buying",
        sidebarDescription: "Active Bids, In-Progress, Completed Orders",
      },
      {
        sidebarImg:
          "https://stockx-assets.imgix.net/png/icons/account_menu/selling.svg?auto=compress,format",
        sidebarTitle: "Selling",
        sidebarDescription: "Active Asks, In-Progress, Completed Sales",
      },
      {
        sidebarImg:
          "https://stockx-assets.imgix.net/png/icons/account_menu/profile.svg?auto=compress,format",
        sidebarTitle: "Profile",
        sidebarDescription: "Learn what's unique to you",
      },
      {
        sidebarImg:
          "https://stockx-assets.imgix.net/png/icons/account_menu/portfolio.svg?auto=compress,format",
        sidebarTitle: "Portfolio",
        sidebarDescription: "See the value of your items",
      },
      {
        sidebarImg:
          "https://stockx-assets.imgix.net/png/icons/account_menu/following.svg?auto=compress,format",
        sidebarTitle: "Following",
        sidebarDescription: "Products you're watching",
      },
      {
        sidebarImg:
          "https://stockx-assets.imgix.net/png/icons/account_menu/settings.svg?auto=compress,format",
        sidebarTitle: "Settings",
        sidebarDescription: "Payments, Payouts, Addresses",
      },
      {
        sidebarImg:
          "https://stockx-assets.imgix.net/png/icons/logout.svg?auto=compress,format",
        sidebarTitle: "Log Out",
        sidebarDescription: "",
      },
    ],
  };

  handleOnClick = (id) => {
    this.setState({ activeTab: id });
  };

  render() {
    const {
      state: { activeTab },
      handleOnClick,
    } = this;
    return (
      <>
        <Nav />
        <PageContainer>
          <Sidebar>
            <Gab />
            <UsernameContainer>
              <Username>Daseul Song</Username>
            </UsernameContainer>
            <SidebarNavWrapper>
              {this.state.sidebars.map(
                ({ sidebarImg, sidebarTitle, sidebarDescription }) => (
                  <SidebarNav
                    key={sidebarImg}
                    sidebarImg={sidebarImg}
                    sidebarTitle={sidebarTitle}
                    sidebarDescription={sidebarDescription}
                    activeTab={activeTab}
                    handleOnClick={handleOnClick}
                  />
                )
              )}
            </SidebarNavWrapper>
          </Sidebar>
          <DashboardWrapper>
            {this.state.activeTab === "Buying" ? (
              <BuyingContent />
            ) : (
              <SellingContent />
            )}
          </DashboardWrapper>
        </PageContainer>
      </>
    );
  }
}
const Nav = styled.div`
  min-height: 90px;
`;

const PageContainer = styled.div`
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
