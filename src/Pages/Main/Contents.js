import React, { useState, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Items from "./Components/Items";
import Tooltip from "./Components/Tooltip";
import { API_MOST_POPULAR } from "./Components/Config";
import { API_LOWEST_ASK } from "./Components/Config";
import { API_HIGHEST_BID } from "./Components/Config";

const Contents = () => {
  const history = useHistory();
  const [mostPopular, setMostPopular] = useState([]);
  const [lowestAsk, setLowestAsk] = useState([]);
  const [highestBid, setHighestBid] = useState([]);

  const handleFetch = () => {
    fetch(`${API_MOST_POPULAR}`)
      .then((res) => res.json())
      .then((res) => setMostPopular(res.message.Product));
    fetch(`${API_LOWEST_ASK}`)
      .then((res) => res.json())
      .then((res) => setLowestAsk(res.message.Product));
    fetch(`${API_HIGHEST_BID}`)
      .then((res) => res.json())
      .then((res) => setHighestBid(res.message.Product));
  };

  const checkPopular = true;
  const checkLowest = true;
  const checkHighest = true;

  const goToAll = (sort) => {
    history.push(`/sneakers?sort=${sort}`);
  };

  useEffect(() => {
    handleFetch();
  }, []);

  return (
    <MainContainer>
      <Title>
        <Header>
          Most Popular
          <Tooltip
            label="The 'Most Popular' products are a curated collection of our best
            selling items."
          />
        </Header>
        <SeeAll onClick={() => goToAll("most_popular")}>See All</SeeAll>
      </Title>
      <Items checkPopular={checkPopular} mostPopular={mostPopular} />
      <Title>
        <Header>
          Lowest Ask
          <Tooltip label="The 'Lowest Asks' are the products with listed Lowest Asks. These are the products that people are ready to sell." />
        </Header>
        <SeeAll onClick={() => goToAll("lowest_ask")}>See All</SeeAll>
      </Title>
      <Items checkLowest={checkLowest} lowestAsk={lowestAsk} />
      <Title>
        <Header>
          Highest Bids
          <Tooltip label="The 'Highest Bids' are the products with listed Highest Bids. These are the products that people are ready to buy." />
        </Header>
        <SeeAll onClick={() => goToAll("highest_bid")}>See All</SeeAll>
      </Title>
      <Items checkHighest={checkHighest} highestBid={highestBid} />
      <GoToSneakers onClick={() => goToAll("most_popular")}>
        Browse Thousands of Sneakers on our Live Marketplace
      </GoToSneakers>
      <BottomContainer>
        <ArticleSection>
          <Title bottom>
            <Header>Latest News</Header>
            <SeeAll>See All</SeeAll>
          </Title>
          <Article>
            <ArticleTitle>Kobe's Impact on Sneaker Free Agency</ArticleTitle>
            <ArticleDate>Hadjj Mare - 09/03/2020</ArticleDate>
          </Article>
          <Article>
            <ArticleTitle>Win $2,500 on TikTok</ArticleTitle>
            <ArticleDate>StockX - 09/02/2020</ArticleDate>
          </Article>
          <Article>
            <ArticleTitle>The Drop List 8.31.2020</ArticleTitle>
            <ArticleDate>Hadjj Mare - 09/01/2020</ArticleDate>
          </Article>
          <Article>
            <ArticleTitle>
              KAWS What Party Figures Shipping Guidelines
            </ArticleTitle>
            <ArticleDate>Drew - 09/01/2020</ArticleDate>
          </Article>
          <Article>
            <ArticleTitle>
              How to Follow StockX Bag Condition Guidelines
            </ArticleTitle>
            <ArticleDate>StockX - 08/31/2020</ArticleDate>
          </Article>
        </ArticleSection>
        <CalendarSection>
          <Title bottom>
            <Header>Release Calendar</Header>
            <SeeAll>See All</SeeAll>
          </Title>
          <ItemSection>
            {mostPopular.map((el) => {
              return (
                <ItemBox key={el.product_id}>
                  <ItemHeader>
                    <ReleaseDate>
                      Sep <ReleaseDivider>|</ReleaseDivider> 4
                    </ReleaseDate>
                    <AddToCollection
                      alt=""
                      src="https://stockx-assets.imgix.net/svg/icons/collections/addCalendar.svg?auto=compress,format"
                    />
                  </ItemHeader>
                  <ItemImg
                    alt=""
                    src="https://stockx-assets.imgix.net/media/New-Product-Placeholder-Default.jpg?fit=fill&bg=FFFFFF&w=300&h=214&auto=format,compress&trim=color&q=90&dpr=2&updated_at=0"
                  />
                  <ItemTitle>null</ItemTitle>
                  <ItemStat>
                    <DownArrow>▼</DownArrow>
                    <LowestAskPrice>ASK: $0</LowestAskPrice>
                  </ItemStat>
                  <BidBtn>BID</BidBtn>
                </ItemBox>
              );
            })}
          </ItemSection>
        </CalendarSection>
      </BottomContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 1170px;
  margin: 0 auto;
  letter-spacing: 0.7px;
  line-height: 1.3;
  text-align: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${(props) =>
    props.bottom ? "34px 0 16px 0" : "34px 16px 16px 16px"};
`;

const Header = styled.span`
  font-size: 20px;
  color: #010101;
`;

const SeeAll = styled.span`
  margin-top: 2.5px;
  font-size: 16px;
  color: ${(props) => props.theme.colors.green};
  cursor: pointer;
`;

const GoToSneakers = styled.button`
  display: inline-block;
  width: 585px;
  height: 72px;
  margin-top: 45px;
  padding: 25px 30px 22px 30px;
  border-radius: 4px;
  font-size: 18px;
  letter-spacing: 1.3px;
  text-align: center;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.green};
  &:hover {
    background-color: #045732;
  }
`;

const BottomContainer = styled.div`
  display: flex;
  width: 1170px;
  margin-bottom: 60px;
  letter-spacing: 0.7px;
  text-align: center;
`;

const ArticleSection = styled.div`
  width: 438px;
  ${(props) => props.theme.flexColumn};
  padding: 15px;
`;

const Article = styled.article`
  ${(props) => props.theme.flexColumn};
  margin: 0 8px 0 8px;
  padding-bottom: 25px;
  border-bottom: 1px solid #cecece;
  line-height: 1.4;
  text-align: left;
  color: #010101;
`;

const ArticleTitle = styled.h3`
  margin: 25px 0 0 0;
  font-size: 20px;
  cursor: pointer;
`;

const ArticleDate = styled.h4``;

const CalendarSection = styled.div`
  ${(props) => props.theme.flexColumn};
  width: 740px;
  padding: 15px;
`;

const ItemSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  text-align: left;
`;

const ItemBox = styled.div`
  ${(props) => props.theme.flexColumn};
  justify-content: space-between;
  width: 234px;
  height: 316.27px;
  padding: 15px 20px 10px;
  box-shadow: 1px 0 0 0 #cecece, 0 1px 0 0 #cecece, 1px 1px 0 0 #cecece,
    1px 0 0 0 #cecece inset, 0 1px 0 0 #cecece inset;
`;

const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ReleaseDate = styled.span`
  font-size: 20px;
`;

const ReleaseDivider = styled.span`
  color: #999;
`;

const AddToCollection = styled.img`
  width: 20px;
  cursor: pointer;
`;

const ItemImg = styled.img`
  width: 191px;
  cursor: pointer;
`;

const ItemTitle = styled.div`
  line-height: 16px;
  cursor: pointer;
`;

const ItemStat = styled.div``;

const DownArrow = styled.span`
  color: #ff5a5f;
`;

const LowestAskPrice = styled.span`
  font-size: 13px;
  text-transform: uppercase;
  line-height: 13px;
`;

const BidBtn = styled.button`
  width: 49px;
  height: 38px;
  border: 2px solid ${(props) => props.theme.colors.green};
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.green};
  &:hover {
    color: ${(props) => props.theme.colors.white};
    border: 2px solid #045732;
    background-color: #045732;
  }
`;

export default Contents;
