import React, { useState } from "react";
import Header from "./Header";
import MainNav from "./MainNav";
import Contents from "./Contents";
import Ticker from "./Ticker";

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
      <Header tabTitle={tabTitle} activeTab={activeTab} />
      <MainNav
        tabTitle={tabTitle}
        activeTab={activeTab}
        menuTabHandler={menuTabHandler}
      />
      <Contents />
      <Ticker />
    </>
  );
};

export default Main;
