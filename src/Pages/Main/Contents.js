import React, { Component } from "react";
import styled from "styled-components";
import Tooltip from "./Components/Tooltip";

export default class Contents extends Component {
  constructor() {
    super();
    this.state = {
      jordanData: [],
      itemData: [],
    };
  }
  contentsFetch = () => {
    fetch("/data/jordan.json")
      .then((res) => res.json())
      .then((res) => this.setState({ jordanData: res.data }));
    fetch("/data/item.json")
      .then((res) => res.json())
      .then((res) => this.setState({ itemData: res.data }));
  };

  componentDidMount = () => {
    this.contentsFetch();
  };

  render() {
    return (
      <MainContainer>
        <Title>
          <Header>Jordan Series</Header>
          <SeeAll>See All</SeeAll>
        </Title>
        <ContentsContainer>
          <JordanSeries>
            {this.state.jordanData.map((el) => {
              return (
                <Jordan key={el.id}>
                  <JordanImage alt="" src={el.img} />
                  <Brand alt="" src={el.jordanimg} />
                </Jordan>
              );
            })}
          </JordanSeries>
        </ContentsContainer>
        <Title>
          <Header>
            Most Popular
            <Tooltip
              label="The 'Most Popular' products are a curated collection of our best
            selling items."
            />
          </Header>
          <SeeAll>See All</SeeAll>
        </Title>
        <ItemContainer>
          {this.state.itemData.map((el) => {
            return (
              <Item key={el.id}>
                <ItemImageBox>
                  <ItemImage alt="" src={el.img} />
                </ItemImageBox>
                <ItemInfo>
                  <ItemName>{el.name}</ItemName>
                  <LowestAsk>Lowest Ask</LowestAsk>
                  <ItemPrice>${el.price}</ItemPrice>
                  <Sold>{el.sold} Sold</Sold>
                </ItemInfo>
              </Item>
            );
          })}
        </ItemContainer>
        <Title>
          <Header>
            New Lowest Ask
            <Tooltip label="The 'New Lowest Asks' are the products with the most recently listed Lowest Asks. These are the products that people are ready to sell." />
          </Header>
          <SeeAll>See All</SeeAll>
        </Title>
        <ItemContainer>
          {this.state.itemData.map((el) => {
            return (
              <Item key={el.id}>
                <ItemImageBox>
                  <ItemImage alt="" src={el.img} />
                </ItemImageBox>
                <ItemInfo>
                  <ItemName>{el.name}</ItemName>
                  <LowestAsk>Lowest Ask</LowestAsk>
                  <ItemPrice>${el.price}</ItemPrice>
                  <RecentTime>9 Minutes Ago</RecentTime>
                </ItemInfo>
              </Item>
            );
          })}
        </ItemContainer>
        <Title>
          <Header>
            New Highest Bids
            <Tooltip label="The 'New Highest Bids' are the products with the most recently listed Highest Bids. These are the products that people are ready to buy." />
          </Header>
          <SeeAll>See All</SeeAll>
        </Title>
        <ItemContainer>
          {this.state.itemData.map((el) => {
            return (
              <Item key={el.id}>
                <ItemImageBox>
                  <ItemImage alt="" src={el.img} />
                </ItemImageBox>
                <ItemInfo>
                  <ItemName>{el.name}</ItemName>
                  <LowestAsk>Highest Bids</LowestAsk>
                  <ItemPrice>${el.price}</ItemPrice>
                  <RecentTime>9 Minutes Ago</RecentTime>
                </ItemInfo>
              </Item>
            );
          })}
        </ItemContainer>
        <GoToSneakers>
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
              {this.state.itemData.map((el) => {
                return (
                  <ItemBox key={el.id}>
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
                    <ItemTitle>Jordan 1 Retro High Tokyo Bio Hack</ItemTitle>
                    <ItemStat>
                      <DownArrow>▼</DownArrow>
                      <LowestAskPrice>ASK: $298</LowestAskPrice>
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
  }
}

const MainContainer = styled.div`
  width: 1170px;
  margin: 0 auto;
  letter-spacing: 0.7px;
  line-height: 1.3;
  text-align: center;
`;

const ContentsContainer = styled.div`
  padding: 0 15px 0 15px;
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
  color: #08a05c;
  cursor: pointer;
`;

const JordanSeries = styled.ul`
  display: flex;
  margin: 0 -8px;
`;

const Jordan = styled.div`
  height: 180px;
  padding: 0 8px;
`;

const JordanImage = styled.img`
  max-width: 100%;
  height: 188.41px;
  cursor: pointer;
`;

const Brand = styled.img`
  position: relative;
  top: -190px;
  left: 35%;
  width: 56px;
  height: 56px;
  cursor: pointer;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1170px;
  padding: 0 15px 0 15px;
`;

const Item = styled.div`
  max-width: 215px;
  border: #fafafa 2px solid;
  border-radius: 3px;
  cursor: pointer;
`;

const ItemImageBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ItemImage = styled.img`
  width: 179px;
`;

const ItemInfo = styled.div`
  background-color: #fafafa;
  padding: 16px;
  text-align: left;
`;

const ItemName = styled.div`
  height: 38px;
  margin-bottom: 6px;
`;

const LowestAsk = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`;

const ItemPrice = styled.div`
  font-size: 22px;
  font-weight: 700;
`;
const Sold = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`;

const RecentTime = styled.div`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
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
  color: white;
  background-color: #08a05c;
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
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const Article = styled.article`
  display: flex;
  flex-direction: column;
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
  display: flex;
  flex-direction: column;
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
  display: flex;
  flex-direction: column;
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
  border: 2px solid #08a05c;
  font-size: 14px;
  font-weight: bold;
  color: #08a05c;
  &:hover {
    color: white;
    border: 2px solid #045732;
    background-color: #045732;
  }
`;
