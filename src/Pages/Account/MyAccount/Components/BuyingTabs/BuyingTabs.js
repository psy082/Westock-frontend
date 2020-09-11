import React, { useState, useEffect } from "react";
import styled from "styled-components";
import SvgSortBuying from "../SvgSort/SvgSortBuying";
import BuyingCurrentList from "../BuyingCurrentList/BuyingCurrentList";

function BuyingTabs(props) {
  const [isActive, setActive] = useState(0);

  return (
    <BuyingTabsComp>
      <ProcessTab>
        <TabList>
          <ListElement isActive="">
            <A clicked={setActive === 0}>
              <Span>current</Span>
            </A>
          </ListElement>
          <ListElement isActive="">
            <A clicked={setActive === 1}>
              <Span>pending</Span>
            </A>
          </ListElement>
          <ListElement isActive="">
            <A>
              <Span>history</Span>
            </A>
          </ListElement>
        </TabList>
        <TabPanel>
          <Notice>
            <P>
              Due to COVID-19, please allow 2 to 3 weeks for processing &
              delivery.
            </P>
          </Notice>
        </TabPanel>
        <SearchWrapper>
          <SearchForm>
            <SearchBtn placeholder="Search" type="submit" value="Search" />
            <SearchBar placeholder="Search name" type="text" />
          </SearchForm>
        </SearchWrapper>
        <Table>
          <thead>
            <tr>
              <Th>
                Item
                <SvgSortBuying />
              </Th>
              <Th>
                Bid Price
                <SvgSortBuying />
              </Th>
              <Th>
                Highest Bid
                <SvgSortBuying />
              </Th>
              <Th>
                Lowest Ask
                <SvgSortBuying />
              </Th>
              <Th>
                Expires
                <SvgSortBuying />
              </Th>
            </tr>
          </thead>
          {props.products && (
            <tbody>
              {props.products.map(
                ({
                  image_url,
                  product_name,
                  product_size_id,
                  product_style,
                  price,
                  highest_bid,
                  lowest_ask,
                  expired_date,
                }) => (
                  <BuyingCurrentList
                    key={image_url}
                    image_url={image_url}
                    product_name={product_name}
                    product_size_id={product_size_id}
                    product_style={product_style}
                    price={price}
                    highest_bid={highest_bid}
                    lowest_ask={lowest_ask}
                    expired_date={expired_date}
                  />
                )
              )}
            </tbody>
          )}
        </Table>
      </ProcessTab>
    </BuyingTabsComp>
  );
}

const BuyingTabsComp = styled.div``;

const ProcessTab = styled.div`
  margin-left: 0;
  border-bottom: 1px solid rgba(34, 36, 38, 0.15);
`;

const TabList = styled.ul`
  display: flex;
  padding-bottom: 14px;
  border-bottom: 1px solid #ddd;
  border-color: #e5e7ea;
`;

const ListElement = styled.li`
  margin-bottom: -1px;
`;

const A = styled.a`
  margin-right: 2px;
  padding: 10px 15px;
  background-color: #fff;
  color: #000;
  border-bottom: ${(props) => (props.clicked ? "4px solid #08a05c;" : "none")};
  cursor: pointer;
`;

const Span = styled.span`
  font-size: 18pt;
  font-weight: 600;
  color: #000;
  text-transform: capitalize;

  &.Item__style_id,
  &.Item__size {
    padding-right: 15px;
    font-weight: normal;
    font-size: 12pt;
  }
`;

const TabPanel = styled.div`
  display: block;
`;

const Notice = styled.div`
  position: relative;
  margin: 10px 0px;
  padding: 8px 16px;
  left: 50%;
  color: rgb(0, 0, 0);
  background-color: rgba(255, 96, 96, 0.1);
  border-radius: 2px;
  transform: translateX(-50%);
`;

const P = styled.p`
  text-align: center;
  font-size: 12pt;
`;

const SearchWrapper = styled.div`
  margin: 10px 0 20px;
  width: 50%;
  margin-right: auto;
`;

const SearchForm = styled.div`
  position: relative;
`;

const SearchBtn = styled.input`
  position: absolute;
  width: 80px;
  top: 0px;
  right: 0px;
  bottom: 0px;
  background-color: black;
  color: white;
  border-radius: 0px 5px 5px 0px;
  border-color: black;
  cursor: pointer;
`;

const SearchBar = styled.input`
  width: 100%;
  height: 40px;
  font-size: 12pt;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-indent: 12px;
`;

const Table = styled.table`
  width: 100%;
  margin-bottom: 2px;
  overflow-x: scroll;
`;

const Th = styled.th`
  position: sticky;
  width: 16.6%;
  padding: 3px 8px;
  text-align: left;
  font-size: 12pt;
  font-weight: 600;
  border-right: 1px solid #e5e7ea;
  border-bottom: 2px solid #ddd;

  &:first-child {
    width: 40%;
    font-size: 14pt;
  }

  &:last-child {
    width: 10%;
  }
`;

export default BuyingTabs;
