import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Slider from "./Slider";
import SizePopUp from "./SizePopUp";
import ScrollSlider from "./ScrollSlider";
import ScrollSliderItem from "./ScrollSliderItem";
import ChartSignUp from "./ChartSignUp";
import FollowSignUp from "./FollowSignUp";

function ItemDetail() {
  const [isActive, setIsActive] = useState(false);
  const [sizeList, setSize] = useState([]);
  const [selectedSize, setSelectedSize] = useState(0);
  const [details, setDetails] = useState({});
  const [aroundView, setAroundView] = useState([]);
  const [scrollIndex, setScrollIndex] = useState(0);

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
    if (
      sizeList[selectedSize] &&
      sizeList[selectedSize].difference.includes("-")
    ) {
      return "#ff5a5f";
    } else if (
      sizeList[selectedSize] &&
      sizeList[selectedSize].difference.includes("+")
    ) {
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
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="arrow-up"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
                ></path>
              </svg>
              <button>share</button>
            </ButtonStyle>
            <ButtonStyle>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="plus"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                ></path>
              </svg>
              <button>portfolio</button>
            </ButtonStyle>
            <ButtonStyle>
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="plus"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"
                ></path>
              </svg>

              <button>follow</button>
            </ButtonStyle>
            {/* <FollowSignUp /> */}
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
                  <Condition>new</Condition>
                </GreyText>
                <DividerPipe>|</DividerPipe>
                <GreyText>
                  <span>ticker:</span>
                  <span>{details.ticker}</span>
                </GreyText>
                <DividerPipe>|</DividerPipe>
                <div>
                  <Condition>100% authentic</Condition>
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
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="chevron-down"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path
                      fill="currentColor"
                      d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                    ></path>
                  </svg>
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
                alt=""
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
                alt="chart"
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
                    alt=""
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
  ${(props) => props.theme.flexColumnCenter};
  width: 100vw;

  .productGradient {
    height: 20px;
    width: 100%;
  }
`;

const Header = styled.div`
  ${(props) => props.theme.flexRowCenter};
  justify-content: space-between;
  padding: 16px;
  width: 1170px;
`;

const Buttons = styled.div`
  display: flex;
`;

const ButtonStyle = styled.div`
  display: flex;
  border: 1px solid;
  border-radius: 20px;
  padding: 4px 12px;

  &:not(:last-child) {
    margin-right: 5px;
  }

  svg {
    width: 0.875em;
    margin-right: 4px;
  }

  button {
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
  }
`;

const Footage = styled.div`
  display: flex;
  align-items: flex-end;

  ul {
    display: flex;

    li {
      text-transform: uppercase;
      font-size: 12px;
      color: ${(props) => props.theme.colors.footage};

      &:not(:first-child)::before {
        padding: 0 5px;
        content: "/";
      }
    }
  }
`;

const ProductContent = styled.div`
  ${(props) => props.theme.flexColumnCenter}
  .contentContainer {
    padding: 22px 15px;
    width: 1170px;
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
  color: ${(props) => props.color || props.theme.colors.green};
  font-weight: 700;
`;

const DividerPipe = styled.span`
  padding: 0 10px;
`;

const ProductSummary = styled.div`
  margin-top: 40px;
  display: flex;
`;

const Options = styled.div`
  padding-right: 25px;
  border-right: 1px solid #ccc;
  margin-bottom: 35px;
`;

const SizeSelect = styled.div`
  display: flex;
  cursor: pointer;

  .size {
    display: flex;
    font-size: 30px;
    font-weight: 500;
    text-transform: caplitalize;
    text-align: left;
    color: ${(props) => props.theme.colors.textBlack};
  }

  .arrowDown {
    ${(props) => props.theme.flexCenter};

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
    ${(props) => props.theme.flexCenter};
  }

  h3 {
    ${(props) => props.theme.flexCenter};
    color: #999999;
    font-size: 16px;
    font-weight: 700;
  }
`;

const FlexCenter = styled.div`
  ${(props) => props.theme.flexCenter};
`;

const LastSaleSize = styled.span`
  font-size: 15px;
  font-weight: 600;
  text-transform: capitalize;
  cursor: pointer;
  display: ${(props) => props.display || "block"};
`;

const SaleSizeDivider = styled.div`
  border-left: 1px solid #999;
  margin: 5px 10px;
  height: 12px;
  display: ${(props) => props.display || "block"};
`;

const BidBtn = styled.div`
  ${(props) => props.theme.flexColumnCenter};
  padding: 0 20px;

  button {
    display: flex;
    border-radius: 5px;
    background-color: ${(props) => props.bgColor || props.theme.colors.green};
    border-bottom: 4px solid
      ${(props) => props.bgColor || props.theme.colors.green};
    padding: 13px 17px 5px;
    transition: all 0.2s ease;

    &:hover {
      transform: scale(1.02);
      transition: all 0.2s ease;
    }
  }
`;

const Stats = styled.div`
  ${(props) => props.theme.flexColumnCenter};
  font-weight: 500;
  font-size: 30px;
  line-height: 1;
  color: #fff;
  cursor: pointer;
`;

const BtnTitle = styled.span`
  ${(props) => props.theme.flexColumnCenter};
  font-weight: 600;
  font-size: 28px;
  color: #fff;
`;

const BtnSubtitle = styled.span`
  color: ${(props) => props.color || "#c6e6c2"};
  font-size: 18px;
`;

const BtnDivider = styled.div`
  border-left: 1px solid ${(props) => props.color || "#348a28"};
  margin: 0 18px;
  height: 55px;
`;

const SaleValue = styled.div`
  font-size: 30px;
  font-weight: 500;
  margin: 0 5px 0 10px;
`;

const FlexRowCenter = styled.div`
  ${(props) => props.theme.flexCenter};
`;

const Arrow = styled.span`
  border-color: transparent transparent
    ${(props) => props.arrowColor || props.theme.colors.green};
  border-width: 0 7px 13.9px;
  border-style: solid;
  transform: ${(props) => props.rotate || "rotate(0deg)"};
`;

const Difference = styled.div`
  color: ${(props) => props.color || "#999"};
  font-weight: 600;
`;

const Percentage = styled.div`
  color: ${(props) => props.color || "#999"};
  font-weight: 600;
`;

const ProductMedia = styled.div`
  margin-top: 25px;
  min-height: 400px;
`;

const AroundView = styled.div`
  ${(props) => props.theme.flexColumnCenter};
  margin-bottom: 60px;
`;

const ProductInfo = styled.div`
  display: flex;
  margin-top: 20px;
`;

const DetailColumn = styled.div`
  ${(props) => props.theme.flexColumn};
  justify-content: flex-start;
  width: 30%;
  margin-right: 5%;
`;

const Detail = styled.div`
  display: flex;
  margin-bottom: 10px;
  color: ${(props) => props.theme.colors.textBlack};
`;

const DetailTitle = styled.div`
  text-transform: uppercase;
  font: 400 20px "Bebas Neue", cursive;
  letter-spacing: 1.2px;
`;

const DetailContent = styled.div`
  font-size: 20px;
  text-transform: uppercase;
  font: 100 20px "Bebas Neue", cursive;
  letter-spacing: 1.2px;
  white-space: nowrap;
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
    color: ${(props) => props.theme.colors.green};
    font-size: 18px;
    font-weight: 700;
    padding: 0;
  }
`;

const MarketSummary = styled.div`
  ${(props) => props.theme.flexCenter}
  width: 100%;
  margin-top: 5px;
  min-height: 100px;
  background-color: ${(props) => props.theme.colors.mediumGrey};

  ul {
    width: 1170px;
    display: flex;
    align-items: center;
    justify-content: space-around;

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
  ${(props) => props.theme.flexCenter};
  width: 100%;
  margin-bottom: 20px;
  border-top: 1px solid #cecece;
`;

const Container = styled.div`
  width: 1170px;
  padding: 0 15px;
`;

const Banner = styled.div`
  ${(props) => props.theme.flexCenter};

  div {
    position: relative;
    top: -16px;
    color: #fff;
    text-transform: uppercase;
    background-color: ${(props) => props.theme.colors.footageHover};
    padding: 12px 20px;
    margin-top: 11px;

    &::before {
      position: absolute;
      left: -5px;
      top: 0;
      content: "";
      border-color: transparent transparent black;
      border-width: 0 0 5px 5px;
      border-style: solid;
    }
  }
`;

const LatestSales = styled.div`
  ${(props) => props.theme.flexCenter};
  border-top: 1px solid #cecece;
  width: 100%;
`;

const GraphWrapper = styled.div`
  position: relative;
  width: 66.66666667%;
  height: 532px;
`;

const History = styled.div`
  ${(props) => props.theme.flexColumnCenter};
  text-align: center;
  width: 33.33333333%;
  padding: 0 15px;
`;

const HistoryHeader = styled.div`
  ${(props) => props.theme.flexRowCenter};
  line-height: 64px;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 3px;
  text-transform: uppercase;
  width: 100%;

  img {
    width: 18px;
  }
`;

const HistoryTitle = styled.div`
  padding-top: 30px;
  width: 100%;
  font-size: 26px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  border-top: 2px solid #ddd;
`;

const HistorySubTitle = styled.div`
  font-size:14px
  font-weight:600;
  text-transform: uppercase;
  color: #666;
  margin-bottom:8px;
  
`;

const HistoryNumber = styled.div`
  font-size: 36px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${(props) => props.color || props.theme.colors.green};
  padding-bottom: 22px;
`;
