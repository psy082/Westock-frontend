import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "./Slider";
import SizePopUp from "./SizePopUp";
import ScrollSlider from "./ScrollSlider";
import ScrollSliderItem from "./ScrollSliderItem";
import ChartSignUp from "./ChartSignUp";
import FollowExplanation from "./FollowExplanation";
import FollowPopUp from "./FollowPopUp";
import ArrowUp from "./Components/ArrowUp";
import ArrowDown from "./Components/ArrowDown";
import PlusSign from "./Components/PlusSign";

function ItemDetail() {
  const [isActive, setIsActive] = useState(false);
  const [sizeList, setSize] = useState([]);
  const [selectedSize, setSelectedSize] = useState(0);
  const [details, setDetails] = useState({});
  const [aroundView, setAroundView] = useState([]);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [followList, setFollowList] = useState([]);
  const [isFollowPopUpActive, setIsFollowPopUpActive] = useState(false);
  const [followExplanation, setFollowExplanation] = useState(true);

  const handleSize = () => {
    setIsActive(!isActive);
  };

  const getSize = (size) => {
    setSelectedSize(size);
  };

  useEffect(() => {
    fetch("Data/ItemdetailData.json")
      .then((res) => res.json())
      .then((res) => setSize(res.sizeList));
  }, []);

  useEffect(() => {
    fetch("Data/ItemdetailData.json")
      .then((res) => res.json())
      .then((res) => setAroundView(Object.values(res.aroundView).reverse()));
  }, []);

  useEffect(() => {
    fetch("Data/ItemdetailData.json")
      .then((res) => res.json())
      .then((res) => setDetails(res.itemDetails));
  }, []);

  const isPositive = () => {
    if (sizeList[selectedSize]?.difference.includes("-")) {
      return "#ff5a5f";
    } else if (sizeList[selectedSize]?.difference.includes("+")) {
      return "#08a05c";
    } else {
      return "#999";
    }
  };

  const arrow = () => {
    if (sizeList[selectedSize]?.difference.includes("-")) {
      return "#ff5a5f";
    } else if (sizeList[selectedSize]?.difference.includes("+")) {
      return "#08a05c";
    }
  };

  const isNull = () => {
    return sizeList[selectedSize]?.lastSize === null ? "none" : "block";
  };

  const closePopUp = () => {
    setIsActive(!isActive);
  };

  const getScrollIndex = (idx) => {
    setScrollIndex(idx);
  };

  const handleFollowPopUp = () => {
    setIsFollowPopUpActive(!isFollowPopUpActive);
  };

  const sizesToFollow = (idx) => {
    followList.includes(idx)
      ? setFollowList(followList.filter((el) => el !== idx))
      : setFollowList([...followList, idx]);
  };

  const handleFollowExp = () => {
    setFollowExplanation(false);
  };
  return (
    <>
      <DetailWrapper>
        <div className="productGradient"></div>
        <Header>
          <Footage>
            <ul>
              <li>home</li>
              <li>sneakers</li>
              <li>air jordan</li>
              <li>5</li>
              <li>jordan 5 retro alternate bel-air</li>
            </ul>
          </Footage>
          <Buttons>
            <ButtonStyle>
              <PlusSign />
              <DropDownBtn>share</DropDownBtn>
            </ButtonStyle>
            <ButtonStyle>
              <PlusSign />
              <DropDownBtn>portfolio</DropDownBtn>
            </ButtonStyle>
            <ButtonStyle>
              <ArrowUp />
              <DropDownBtn onClick={handleFollowPopUp}>follow</DropDownBtn>
              <FollowExplanation
                followExplanation={followExplanation}
                isPopUpActive={isFollowPopUpActive}
                handleFollowExp={handleFollowExp}
              />
              <FollowPopUp
                sizeList={sizeList}
                followList={followList}
                sizesToFollow={sizesToFollow}
                isPopUpActive={isFollowPopUpActive}
                followExplanation={followExplanation}
                handleFollowPopUp={handleFollowPopUp}
              />
            </ButtonStyle>
          </Buttons>
        </Header>
      </DetailWrapper>
      <ProductContent>
        <div className="contentContainer">
          <ProductHeader>
            <div>
              <h1>{details.name}</h1>
              <SubHeader>
                <GreyText>
                  condition:
                  <Condition color="#08a05c">new</Condition>
                </GreyText>
                <DividerPipe>|</DividerPipe>
                <GreyText>
                  <span>ticker:</span>
                  <span>{details.ticker}</span>
                </GreyText>
                <DividerPipe>|</DividerPipe>
                <div>
                  <Condition color="#08a05c">100% authentic</Condition>
                </div>
              </SubHeader>
            </div>
          </ProductHeader>
          <ProductSummary>
            <Options>
              <GreyText>Size</GreyText>
              <SizeSelect onClick={handleSize}>
                <span className="size">
                  {sizeList[selectedSize] && sizeList[selectedSize]["size"]}
                </span>
                <span className="arrowDown">
                  <ArrowDown />
                </span>
              </SizeSelect>
              <SizePopUp
                isActive={isActive}
                getSize={getSize}
                closePopUp={closePopUp}
              />
            </Options>
            <LastSaleBlock>
              <div className="lastSale">
                <h3>Last Sale</h3>
                <SaleValue>{`$${sizeList[selectedSize]?.lastSale}`}</SaleValue>
                <FlexRowCenter>
                  <Arrow
                    arrowColor={arrow}
                    rotate={
                      sizeList[selectedSize]?.difference.includes("-")
                        ? "rotate(180deg)"
                        : "rotate(0deg)"
                    }
                  />
                  <Difference
                    color={isPositive}
                  >{`${sizeList[selectedSize]?.difference}`}</Difference>
                  <Percentage
                    color={isPositive}
                  >{`(${sizeList[selectedSize]?.percentage})`}</Percentage>
                </FlexRowCenter>
              </div>
              <FlexCenter>
                <LastSaleSize
                  display={isNull}
                >{`Size ${sizeList[selectedSize]?.lastSize}`}</LastSaleSize>
                <SaleSizeDivider display={isNull} />
                <LastSaleSize>View All Sales</LastSaleSize>
              </FlexCenter>
            </LastSaleBlock>
            <BidBtn>
              <button>
                <Stats>
                  {`$${sizeList[selectedSize]?.lowestAsk}`}
                  <BtnSubtitle>Lowest Ask</BtnSubtitle>
                </Stats>
                <BtnDivider />
                <BtnTitle>
                  Buy
                  <BtnSubtitle>or Bid</BtnSubtitle>
                </BtnTitle>
              </button>
              <FlexCenter>
                <LastSaleSize>Size --</LastSaleSize>
                <SaleSizeDivider />
                <LastSaleSize>View All Sales</LastSaleSize>
              </FlexCenter>
            </BidBtn>
            <BidBtn bgColor="#ff5a5f">
              <button>
                <Stats>
                  {`$${sizeList[selectedSize]?.highestBid}`}
                  <BtnSubtitle color="#FFCFCF">Highest Bid</BtnSubtitle>
                </Stats>
                <BtnDivider color="#cc4c4c" />
                <BtnTitle>
                  Sell
                  <BtnSubtitle color="#FFCFCF">or Ask</BtnSubtitle>
                </BtnTitle>
              </button>
              <FlexCenter>
                <LastSaleSize>Size --</LastSaleSize>
                <SaleSizeDivider />
                <LastSaleSize>View All Sales</LastSaleSize>
              </FlexCenter>
            </BidBtn>
          </ProductSummary>
          <ProductMedia>
            <AroundView>
              <ScrollSliderItem img={aroundView[scrollIndex]} />
              <ScrollSlider getScrollIndex={getScrollIndex} />
            </AroundView>
          </ProductMedia>
          <ProductInfo>
            <DetailColumn>
              <Detail>
                <DetailTitle>Style</DetailTitle>
                <DetailContent>{details.style}</DetailContent>
              </Detail>
              <Detail>
                <DetailTitle>Colorway</DetailTitle>
                <DetailContent>{details.colorway}</DetailContent>
              </Detail>
              <Detail>
                <DetailTitle>retail price</DetailTitle>
                <DetailContent>{`$${details.retailPrice}`}</DetailContent>
              </Detail>
              <Detail>
                <DetailTitle>Release date</DetailTitle>
                <DetailContent>{details.releaseDate}</DetailContent>
              </Detail>
            </DetailColumn>
            <Description>
              <p className="description">
                {details.description?.split("\n").map((el) => (
                  <div>
                    {el}
                    <br />
                  </div>
                ))}
              </p>
              <button>read less</button>
            </Description>
          </ProductInfo>
        </div>
        <MarketSummary>
          <ul>
            <li className="weekHighLow">
              <img
                src="https://stockx-assets.imgix.net/svg/icons/gauge.svg?auto=compress,format"
                alt="gauge"
              />
              <span>52 Week</span>
              <div className="valueContainer">
                <span>high $1,112</span>
                <span>| low $180</span>
              </div>
            </li>
            <li className="tradeRange">
              <img
                src="https://stockx-assets.imgix.net/svg/icons/chart.svg?auto=compress,format"
                alt="bar chart"
              />
              <span>Trade Range (12 Mos.)</span>
              <div className="valueContainer">
                <Condition>
                  $202 <span>-</span>$226
                </Condition>
              </div>
            </li>
            <li className="volatility">
              <img
                src="//stockx-assets.imgix.net/svg/icons/volatility.svg?auto=compress,format"
                alt="volatility"
              />
              <span>Volatility</span>
              <div className="valueContainer">
                <Condition color="#ff5a5f">5.8%</Condition>
              </div>
            </li>
          </ul>
        </MarketSummary>
        <RelatedProducts>
          <Container>
            <Banner>
              <div>related products</div>
            </Banner>
            <Slider />
          </Container>
        </RelatedProducts>
        <LatestSales>
          <Container>
            <Banner>
              <div>latest sales</div>
            </Banner>
            <FlexCenter>
              <GraphWrapper>
                <ChartSignUp />
              </GraphWrapper>
              <History>
                <HistoryHeader>
                  <img
                    src="https://stockx-assets.imgix.net/svg/icons/gauge.svg?auto=compress,format"
                    alt="gauge"
                  />
                  12 month historical
                </HistoryHeader>
                <HistoryTitle># of sales</HistoryTitle>
                <HistoryNumber>13272</HistoryNumber>
                <HistoryTitle>price premium</HistoryTitle>
                <HistorySubTitle>(over original retail price)</HistorySubTitle>
                <HistoryNumber color="#ff5a5f">-1.0%</HistoryNumber>
                <HistoryTitle>average sale price</HistoryTitle>
                <HistoryNumber>$236</HistoryNumber>
              </History>
            </FlexCenter>
          </Container>
        </LatestSales>
      </ProductContent>
    </>
  );
}

export default ItemDetail;

const DetailWrapper = styled.div`
  ${({ theme }) => theme.flexColumnCenter};
  width: 100vw;

  .productGradient {
    height: 20px;
    width: 100%;
  }
`;

const Header = styled.div`
  ${({ theme }) => theme.flexRowCenter};
  justify-content: space-between;
  width: 1170px;
  padding: 16px;
`;

const Buttons = styled.div`
  display: flex;
`;

const ButtonStyle = styled.div`
  display: flex;
  padding: 4px 12px;
  border: 1px solid;
  border-radius: 20px;

  &:not(:last-child) {
    margin-right: 5px;
  }

  svg {
    width: 0.875em;
    margin-right: 4px;
  }
`;

const DropDownBtn = styled.button`
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
`;

const Footage = styled.div`
  display: flex;
  align-items: flex-end;

  ul {
    display: flex;

    li {
      color: ${({ theme }) => theme.colors.footage};
      font-size: 12px;
      text-transform: uppercase;

      &:not(:first-child)::before {
        content: "/";
        padding: 0 5px;
      }
    }
  }
`;

const ProductContent = styled.div`
  ${({ theme }) => theme.flexColumnCenter}
  .contentContainer {
    width: 1170px;
    padding: 22px 15px;
  }
`;

const ProductHeader = styled.div`
  width: 100%;

  h1 {
    font-weight: 700;
    font-size: 55px;
  }
`;

const SubHeader = styled.div`
  display: flex;
  margin-top: 5px;
  text-transform: capitalize;
`;

const GreyText = styled.div`
  color: #999999;
  font-weight: 600;
  font-size: 18px;
`;

const Condition = styled.span`
  font-weight: 700;
  color: ${({ color, theme }) => color || theme.colors.green};
`;

const DividerPipe = styled.span`
  padding: 0 10px;
`;

const ProductSummary = styled.div`
  display: flex;
  margin-top: 40px;
`;

const Options = styled.div`
  margin-bottom: 35px;
  padding-right: 25px;
  border-right: 1px solid #ccc;
`;

const SizeSelect = styled.div`
  display: flex;
  cursor: pointer;

  .size {
    display: flex;
    color: ${({ theme }) => theme.colors.textBlack};
    font-size: 30px;
    font-weight: 500;
    text-transform: caplitalize;
    text-align: left;
  }

  .arrowDown {
    ${({ theme }) => theme.flexCenter};

    svg {
      width: 0.875em;
      height: 1em;
      margin-left: 15px;
      color: #999;
    }
  }
`;

const LastSaleBlock = styled.div`
  padding: 0 20px;
  margin-top: 12px;

  .lastSale {
    ${({ theme }) => theme.flexCenter};
  }

  h3 {
    ${({ theme }) => theme.flexCenter};
    color: #999999;
    font-size: 16px;
    font-weight: 700;
  }
`;

const FlexCenter = styled.div`
  ${({ theme }) => theme.flexCenter};
`;

const LastSaleSize = styled.span`
  display: ${({ display }) => display || "block"};
  font-size: 15px;
  font-weight: 600;
  text-transform: capitalize;
  cursor: pointer;
`;

const SaleSizeDivider = styled.div`
  display: ${({ display }) => display || "block"};
  height: 12px;
  margin: 5px 10px;
  border-left: 1px solid #999;
`;

const BidBtn = styled.div`
  ${({ theme }) => theme.flexColumnCenter};
  padding: 0 20px;

  button {
    display: flex;
    padding: 13px 17px 5px;
    border-radius: 5px;
    border-bottom: 4px solid
      ${({ bgColor, theme }) => bgColor || theme.colors.green};
    background-color: ${({ bgColor, theme }) => bgColor || theme.colors.green};
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.02);
      transition: all 0.2s ease;
    }
  }
`;

const Stats = styled.div`
  ${({ theme }) => theme.flexColumnCenter};
  color: #fff;
  font-weight: 500;
  font-size: 30px;
  line-height: 1;
  cursor: pointer;
`;

const BtnTitle = styled.span`
  ${({ theme }) => theme.flexColumnCenter};
  color: #fff;
  font-weight: 600;
  font-size: 28px;
`;

const BtnSubtitle = styled.span`
  color: ${({ color }) => color || "#c6e6c2"};
  font-size: 18px;
`;

const BtnDivider = styled.div`
  height: 55px;
  margin: 0 18px;
  border-left: 1px solid ${({ color }) => color || "#348a28"};
`;

const SaleValue = styled.div`
  margin: 0 5px 0 10px;
  font-size: 30px;
  font-weight: 500;
`;

const FlexRowCenter = styled.div`
  ${({ theme }) => theme.flexCenter};
`;

const Arrow = styled.span`
  border-color: transparent transparent
    ${({ arrowColor, theme }) => arrowColor || theme.colors.green};
  border-width: 0 7px 13.9px;
  border-style: solid;
  transform: ${({ rotate }) => rotate || "rotate(0deg)"};
`;

const Difference = styled.div`
  color: ${({ color }) => color || "#999"};
  font-weight: 600;
`;

const Percentage = styled.div`
  color: ${({ color }) => color || "#999"};
  font-weight: 600;
`;

const ProductMedia = styled.div`
  margin-top: 25px;
  min-height: 400px;
`;

const AroundView = styled.div`
  ${({ theme }) => theme.flexColumnCenter};
  margin-bottom: 60px;
`;

const ProductInfo = styled.div`
  display: flex;
  margin-top: 20px;
`;

const DetailColumn = styled.div`
  ${({ theme }) => theme.flexColumn};
  justify-content: flex-start;
  width: 30%;
  margin-right: 5%;
`;

const Detail = styled.div`
  display: flex;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.textBlack};
`;

const DetailTitle = styled.div`
  font: 400 20px "Bebas Neue", cursive;
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

const DetailContent = styled.div`
  text-transform: uppercase;
  font: 100 20px "Bebas Neue", cursive;
  white-space: nowrap;
  font-size: 20px;
  letter-spacing: 1.2px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Description = styled.div`
  width: 65%;
  margin-bottom: 20px;
  font-size: 17px;

  .description {
    margin-bottom: 11px;
  }

  button {
    padding: 0;
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.green};
  }
`;

const MarketSummary = styled.div`
  ${({ theme }) => theme.flexCenter}
  width: 100%;
  min-height: 100px;
  margin-top: 5px;
  background-color: ${({ theme }) => theme.colors.mediumGrey};

  ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 1170px;

    li {
      display: flex;
      text-align: left;

      img {
        width: 18px;
        margin-right: 8px;
      }

      span {
        text-transform: uppercase;
        letter-spacing: 1.2px;
      }
    }
  }
`;

const RelatedProducts = styled.div`
  ${({ theme }) => theme.flexCenter};
  width: 100%;
  border-top: 1px solid #cecece;
  margin-bottom: 20px;
`;

const Container = styled.div`
  width: 1170px;
  padding: 0 15px;
`;

const Banner = styled.div`
  ${({ theme }) => theme.flexCenter};

  div {
    position: relative;
    top: -16px;
    margin-top: 11px;
    padding: 12px 20px;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.footageHover};
    text-transform: uppercase;

    &::before {
      content: "";
      position: absolute;
      left: -5px;
      top: 0;
      border-color: transparent transparent black;
      border-width: 0 0 5px 5px;
      border-style: solid;
    }
  }
`;

const LatestSales = styled.div`
  ${({ theme }) => theme.flexCenter};
  border-top: 1px solid #cecece;
  width: 100%;
`;

const GraphWrapper = styled.div`
  position: relative;
  width: 66.66666667%;
  height: 532px;
`;

const History = styled.div`
  ${({ theme }) => theme.flexColumnCenter};
  width: 33.33333333%;
  padding: 0 15px;
  text-align: center;
`;

const HistoryHeader = styled.div`
  ${({ theme }) => theme.flexRowCenter};
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  line-height: 64px;

  img {
    width: 18px;
  }
`;

const HistoryTitle = styled.div`
  width: 100%;
  border-top: 2px solid #ddd;
  padding-top: 30px;
  font-size: 26px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const HistorySubTitle = styled.div`
  margin-bottom:8px;
  color: #666;
  font-size:14px
  font-weight:600;
  text-transform: uppercase;
  
`;

const HistoryNumber = styled.div`
  padding-bottom: 22px;
  color: ${({ color, theme }) => color || theme.colors.green};
  font-size: 36px;
  font-weight: 600;
  text-transform: uppercase;
`;
