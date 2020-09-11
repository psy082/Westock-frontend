import React from "react";
import styled from "styled-components";
import SellingTabs from "../SellingTabs/SellingTabs";

function SellingContent() {
  return (
    <SellingContentComp>
      <SellerStats>
        <Stat>
          <div>
            <Img
              alt="icon_sales"
              src="https://stockx-assets.imgix.net/svg/icons/chart-blue.svg?auto=compress,format"
            />
          </div>
          <div>
            <H3>sales</H3>
            <H2>--</H2>
          </div>
        </Stat>
        <Stat>
          <div>
            <Img
              alt="icon_sales#"
              src="https://stockx-assets.imgix.net/svg/icons/tag.svg?auto=compress,format"
            />
          </div>
          <div>
            <H3>sales (#)</H3>
            <H2>--</H2>
          </div>
        </Stat>
      </SellerStats>
      <SellingTabs />
    </SellingContentComp>
  );
}

const SellingContentComp = styled.div`
  height: 20px;
  background: linear-gradient(#e5e5e5, #f5f5f5, #fff, #fff);
`;

const SellerStats = styled.div`
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

export default SellingContent;
