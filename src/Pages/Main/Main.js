import React, { useState } from "react";
import Nav from "../../Components/Nav/Nav";
import Header from "./Header";
import MainNav from "./MainNav";
import Contents from "./Contents";
import Ticker from "./Ticker";
import Footer from "../../Components/Footer/Footer";

const tabTitle = [
  "Sneakers",
  "Streetwear",
  "Collectibles",
  "Handbags",
  "Watches",
];

const Main = () => {
  const [activeTab, setTab] = useState(0);
  const menuTabHandler = (id) => {
    setTab(id);
  };

  return (
    <>
      <Nav />
      <Header tabTitle={tabTitle} activeTab={activeTab} />
      <MainNav
        tabTitle={tabTitle}
        activeTab={activeTab}
        menuTabHandler={menuTabHandler}
      />
      <Contents />
      <Ticker />
      <Footer />
    </>
  );
};

export default Main;
