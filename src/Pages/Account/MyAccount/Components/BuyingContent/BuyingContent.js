import React, { useState, useEffect } from "react";
import styled from "styled-components";
import BuyingTabs from "../BuyingTabs/BuyingTabs";
import { BUYING_CURRENT } from "../../../../../config";

function BuyingContent() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${BUYING_CURRENT}`, {
      headers: {
        Authorization: localStorage.getItem("ACCESS_TOKEN"),
      },
    })
      .then((response) => response.json())
      .then(({ BUYING_INFOS }) => {
        setProducts({ products: BUYING_INFOS }, () => {
          console.log(products);
        });
      });
  }, []);

  return (
    <BuyingContentComp>
      <BuyerStats>
        <Stat>
          <div>
            <Img
              alt="icon_purchasing"
              src="https://stockx-assets.imgix.net/svg/icons/chart-blue.svg?auto=compress,format"
            />
          </div>
          <div>
            <H3>purchasing</H3>
            <H2>--</H2>
          </div>
        </Stat>
        <Stat>
          <div>
            <Img
              alt="icon_purchasing#"
              src="https://stockx-assets.imgix.net/svg/icons/tag.svg?auto=compress,format"
            />
          </div>
          <div>
            <H3>purchasing (#)</H3>
            <H2>--</H2>
          </div>
        </Stat>
      </BuyerStats>
      <BuyingTabs products={products} />
    </BuyingContentComp>
  );
}

const BuyingContentComp = styled.div`
  height: 20px;
  background: linear-gradient(#e5e5e5, #f5f5f5, #fff, #fff);
`;

const BuyerStats = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

const Stat = styled.div`
  display: flex;
  padding: 0 10px;
`;

const Img = styled.img`
  width: 20px;
  margin-right: 6px;
  vertical-align: middle;
`;

const H3 = styled.h3`
  margin: 5px 0 0;
  font-size: 15px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0;
`;

const H2 = styled.h2`
  margin: 0;
  font-size: 26px;
  font-weight: 500;
`;

export default BuyingContent;
