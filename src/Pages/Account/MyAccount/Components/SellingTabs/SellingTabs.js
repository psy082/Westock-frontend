import React, { useState } from "react";
import SvgSearch from "../SvgSearch/SvgSearch";
import SvgSortSelling from "../SvgSort/SvgSortSelling";
import styled from "styled-components";

function SellingTabs() {
  const [isActive, setActive] = useState(0);

  return (
    <SellingTabsComp>
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
              Due to COVID-19, please allow 1 to 2 weeks for us to send your
              payout.
            </P>
          </Notice>
        </TabPanel>
        <SearchWrapper>
          <SvgSearch />
          <SearchBar placeholder="Search name" type="text" />
        </SearchWrapper>
        <TableListWrapper>
          <Thead>
            <Tr>
              <TableList>
                Item
                <SvgSortSelling />
              </TableList>
              <TableList>
                Ask Price
                <SvgSortSelling />
              </TableList>
              <TableList>
                Highest Bid
                <SvgSortSelling />
              </TableList>
              <TableList>
                Lowest Ask
                <SvgSortSelling />
              </TableList>
              <TableList>
                Spread
                <SvgSortSelling />
              </TableList>
              <TableList>
                Expires
                <SvgSortSelling />
              </TableList>
              <TableList />
            </Tr>
          </Thead>
        </TableListWrapper>
      </ProcessTab>
    </SellingTabsComp>
  );
}
const SellingTabsComp = styled.div``;

const ProcessTab = styled.div`
  margin-left: 0;
  border-bottom: 2px solid rgba(34, 36, 38, 0.15);
`;

const TabList = styled.ul`
  display: flex;
  padding-bottom: 11px;
  border-bottom: 1px solid #ddd;
  border-color: #e5e7ea;
`;

const ListElement = styled.li`
  display: block;
  margin-bottom: -1px;
`;

const A = styled.a`
  margin-right: 2px;
  padding: 10px 15px;
  background-color: #fff;
  color: #000;
  border-bottom: ${(props) => (props.clicked ? "2px solid #1b1c1d;" : "none")};
  cursor: pointer;
`;

const Span = styled.span`
  font-size: 18pt;
  font-weight: 600;
  color: #000;
  text-transform: capitalize;
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
  font-size: 14px;
`;

const SearchWrapper = styled.div`
  width: 50%;
  margin: 10px 0 20px;
  margin-right: auto;
`;

const SearchBar = styled.input`
  width: 200%;
  height: 40px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-indent: 38px;
`;

const TableListWrapper = styled.table`
  width: 100%;
  margin: 1em 0;
  margin-bottom: 6px;
  border-width: 6px 0px 0px;
  border-top-style: solid;
  border-top-color: rgb(229, 231, 234);
  overflow-x: scroll;
`;

const Thead = styled.thead`
  display: table-header-group;
  vertical-align: middle;
`;

const Tr = styled.tr`
  display: table-row;
`;

const TableList = styled.td`
  display: inline-block;
  text-align: initial;
  position: sticky;
  padding: 6px;
  padding-top: 12px;
  padding-left: 100px;
  font-weight: 400;
  &:first-child {
    width: 420px;
  }
  &:last-child {
    width: 150px;
  }
`;
export default SellingTabs;
