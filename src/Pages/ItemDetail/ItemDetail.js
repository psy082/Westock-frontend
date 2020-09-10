import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";
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
import SalesChart from "./SalesChart";
import SignUpModal from "./Components/SignUpModal";
import ViewAllModal from "./Components/ViewAllModal";
import ViewAllSales from "./Components/ViewAllSales";

function ItemDetail() {
  const [data, setData] = useState({});
  const [isActive, setIsActive] = useState(false);
  const [selectedSize, setSelectedSize] = useState(0);
  const [scrollIndex, setScrollIndex] = useState(0);
  const [followList, setFollowList] = useState([]);
  const [isFollowPopUpActive, setIsFollowPopUpActive] = useState(false);
  const [followExplanation, setFollowExplanation] = useState(true);
  const [modalActive, setModalActive] = useState(false);
  const [salesModalActive, setSalesModalActive] = useState(false);
  const [modalTitle, setModalTitle] = useState("");

  const isLoggedin = localStorage.getItem("ACCESS_TOKEN") ? true : false;
  const params = useParams();

  useEffect(() => {
    fetch(`http://13.125.177.118:8000/products/${params.itemName}`)
      .then((res) => res.json())
      .then((res) => setData(res.message));
  }, [params]);

  useEffect(() => {
    modalActive
      ? (window.document.body.style.overflowY = "hidden")
      : (window.document.body.style.overflowY = "scroll");
  }, [modalActive]);

  const sizeList = data["size_info_list"];
  const aroundView = data["detail_images"]?.split("|");
  const isFollowing = followList.length > 0;

  const handleSize = () => {
    setIsActive(!isActive);
  };

  const getSize = (size) => {
    setSelectedSize(size);
  };

  const isPositive = () => {
    if (sizeList && sizeList[selectedSize].difference?.includes("-")) {
      return "#ff5a5f";
    } else if (sizeList && sizeList[selectedSize].difference?.includes("+")) {
      return "#08a05c";
    } else {
      return "#999";
    }
  };

  const arrow = () => {
    if (sizeList && sizeList[selectedSize].difference?.includes("-")) {
      return "#ff5a5f";
    } else if (sizeList && sizeList[selectedSize].difference?.includes("+")) {
      return "#08a05c";
    }
  };

  const isNull = () => {
    return sizeList && sizeList[selectedSize].lastSize === null
      ? "none"
      : "block";
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

  const releaseDate = () => {
    const lst = data.release_date?.split("-");
    return `${lst && lst[2]}/${lst && lst[1]}/${lst && lst[0]}`;
  };

  const handleModal = (title) => {
    setModalTitle(title);
    setModalActive(!modalActive);
  };

  const handleSalesModal = (title) => {
    setModalTitle(title);
    setSalesModalActive(!salesModalActive);
  };

  return (
    <>
      <Nav type="rest" />
      <DetailWrapper>
        <ViewAllModal
          handleModal={handleModal}
          isActive={modalActive}
          isLoggedin={isLoggedin}
          modalTitle={modalTitle}
        />
        <ViewAllSales
          handleModal={handleSalesModal}
          isActive={salesModalActive}
          isLoggedin={isLoggedin}
          modalTitle={modalTitle}
          sales={data.all_sale_list}
        />
        <SignUpModal
          handleSalesModal={handleSalesModal}
          salesModalActive={salesModalActive}
          handleModal={handleModal}
          isActive={modalActive}
          isLoggedin={isLoggedin}
        />
        <div className="productGradient"></div>
        <Header>
          <Footage>
            <ul>
              <li>
                <Link to="/"> home</Link>
              </li>
              <li>
                <Link to="/sneakers">{data.main_category}</Link>
              </li>
              <li>
                <Link to="/sneakers?category=air jordan">
                  {data.sub_category}
                </Link>
              </li>
              <li>
                <Link
                  to={`/sneakers?category=air jordan&series=${data.series}`}
                >
                  {data.series}
                </Link>
              </li>
              <li>
                <Link to="#">{data.name}</Link>
              </li>
            </ul>
          </Footage>
          <Buttons>
            <ButtonStyle>
              <ArrowUp />
              <DropDownBtn>share</DropDownBtn>
            </ButtonStyle>
            <ButtonStyle>
              <PlusSign />
              <DropDownBtn>portfolio</DropDownBtn>
            </ButtonStyle>
            <ButtonStyle
              bgColor={isFollowing ? "#2e2e2e" : "#fff"}
              svgColor={isFollowing ? "#fff" : ""}
            >
              <PlusSign />
              <DropDownBtn
                onClick={handleFollowPopUp}
                textColor={isFollowing ? "#fff" : "black"}
              >
                {isFollowing ? "following" : "follow"}
              </DropDownBtn>
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
                productId={data.product_id}
              />
            </ButtonStyle>
          </Buttons>
        </Header>
      </DetailWrapper>
      <ProductContent>
        <div className="contentContainer">
          <ProductHeader>
            <div>
              <h1>{data.name}</h1>
              <SubHeader>
                <GreyText>
                  condition:
                  <Condition palette="#08a05c">new</Condition>
                </GreyText>
                <DividerPipe>|</DividerPipe>
                <GreyText>
                  <span>ticker:</span>
                  <span>{` ${data.ticker}`}</span>
                </GreyText>
                <DividerPipe>|</DividerPipe>
                <div>
                  <Condition palette="#08a05c">100% authentic</Condition>
                </div>
              </SubHeader>
            </div>
          </ProductHeader>
          <ProductSummary>
            <Options>
              <GreyText>Size</GreyText>
              <SizeSelect onClick={handleSize}>
                <span className="size">
                  {sizeList && sizeList[selectedSize].size}
                </span>
                <span className="arrowDown">
                  <ArrowDown />
                </span>
              </SizeSelect>
              <SizePopUp
                isActive={isActive}
                getSize={getSize}
                closePopUp={closePopUp}
                sizeList={sizeList}
              />
            </Options>
            <LastSaleBlock>
              <div className="lastSale">
                <h3>Last Sale</h3>
                <SaleValue>
                  {sizeList && sizeList[selectedSize].lastSale}
                </SaleValue>
                <FlexRowCenter>
                  <Arrow
                    arrowColor={arrow}
                    rotate={
                      sizeList &&
                      sizeList[selectedSize].difference.includes("-")
                        ? "rotate(180deg)"
                        : "rotate(0deg)"
                    }
                  />
                  <Difference palette={isPositive}>{`${
                    sizeList && sizeList[selectedSize].difference
                  }`}</Difference>
                  <Percentage palette={isPositive}>{`(${
                    sizeList && sizeList[selectedSize].percentage
                  })`}</Percentage>
                </FlexRowCenter>
              </div>
              <FlexCenter>
                <LastSaleSize isDisplayed={isNull}>{`Size ${
                  sizeList && sizeList[selectedSize].lastSize
                }`}</LastSaleSize>
                <SaleSizeDivider isDisplayed={isNull} />
                <LastSaleSize onClick={() => handleSalesModal("sales history")}>
                  View All Sales
                </LastSaleSize>
              </FlexCenter>
            </LastSaleBlock>
            <BidBtn>
              <button>
                <Stats>
                  {sizeList && sizeList[selectedSize].lowestAsk}
                  <BtnSubtitle>Lowest Ask</BtnSubtitle>
                </Stats>
                <BtnDivider />
                <BtnTitle>
                  Buy
                  <BtnSubtitle>or Bid</BtnSubtitle>
                </BtnTitle>
              </button>
              <FlexCenter>
                <LastSaleSize isDisplayed={isNull}>Size --</LastSaleSize>
                <SaleSizeDivider isDisplayed={isNull} />
                <LastSaleSize onClick={() => handleModal("all asks")}>
                  View All Asks
                </LastSaleSize>
              </FlexCenter>
            </BidBtn>
            <BidBtn bgColor="#ff5a5f">
              <button>
                <Stats>
                  {sizeList && sizeList[selectedSize].highestBid}
                  <BtnSubtitle palette="#FFCFCF">Highest Bid</BtnSubtitle>
                </Stats>
                <BtnDivider palette="#cc4c4c" />
                <BtnTitle>
                  Sell
                  <BtnSubtitle palette="#FFCFCF">or Ask</BtnSubtitle>
                </BtnTitle>
              </button>
              <FlexCenter>
                <LastSaleSize isDisplayed={isNull}>Size --</LastSaleSize>
                <SaleSizeDivider isDisplayed={isNull} />
                <LastSaleSize onClick={() => handleModal("all bids")}>
                  View All Bids
                </LastSaleSize>
              </FlexCenter>
            </BidBtn>
          </ProductSummary>
          <ProductMedia>
            <AroundView>
              <ScrollSliderItem img={aroundView && aroundView[scrollIndex]} />
              <ScrollSlider
                getScrollIndex={getScrollIndex}
                isVisible={aroundView?.length !== 1}
              />
            </AroundView>
          </ProductMedia>
          <ProductInfo>
            <DetailColumn isColumn={data.description}>
              <Detail>
                <DetailTitle>Style</DetailTitle>
                <DetailContent>{data.style}</DetailContent>
              </Detail>
              <Detail>
                <DetailTitle>Colorway</DetailTitle>
                <DetailContent>{data.colorway}</DetailContent>
              </Detail>
              <Detail>
                <DetailTitle>retail price</DetailTitle>
                <DetailContent>{`$${data.retail_price}`}</DetailContent>
              </Detail>
              <Detail isDisplay={data.release_date ? "flex" : "none"}>
                <DetailTitle>Release date</DetailTitle>
                <DetailContent>{releaseDate()}</DetailContent>
              </Detail>
            </DetailColumn>
            <Description isVisible={data.description ? "block" : "none"}>
              <div className="description">
                {data.description?.split("\n").map((el) => (
                  <div key={el}>
                    {el}
                    <br />
                  </div>
                ))}
              </div>
              <button>read less</button>
            </Description>
          </ProductInfo>
        </div>
        <MarketSummary>
          <ul>
            <li>
              <img
                src="https://stockx-assets.imgix.net/svg/icons/gauge.svg?auto=compress,format"
                alt="gauge"
              />
              <span>52 Week</span>
              <div>
                <span>{`high ${data["52week_high"]}`}</span>
                <span>{` | low ${data["52week_low"]}`}</span>
              </div>
            </li>
            <li>
              <img
                src="https://stockx-assets.imgix.net/svg/icons/chart.svg?auto=compress,format"
                alt="bar chart"
              />
              <span>Trade Range (12 Mos.)</span>
              <div>
                <Condition>{data.trade_range}</Condition>
              </div>
            </li>
            <li>
              <img
                src="//stockx-assets.imgix.net/svg/icons/volatility.svg?auto=compress,format"
                alt="volatility"
              />
              <span>Volatility</span>
              <div>
                <Condition palette="#ff5a5f">{data.volatility}</Condition>
              </div>
            </li>
          </ul>
        </MarketSummary>
        <RelatedProducts>
          <Container>
            <Banner>
              <div>related products</div>
            </Banner>
            <Slider relatedProducts={data.related_products} />
          </Container>
        </RelatedProducts>
        <LatestSales>
          <Container>
            <Banner>
              <div>latest sales</div>
            </Banner>
            <FlexCenter>
              <GraphWrapper>
                <SalesChart sales={data.all_sale_list} />
                <ChartWrapper>
                  <ViewAllBtn onClick={() => handleSalesModal("sales history")}>
                    View All Sales
                  </ViewAllBtn>
                  <SalesTable>
                    <thead>
                      <tr>
                        <th>size</th>
                        <th>sale price</th>
                        <th>date</th>
                        <th>time</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.all_sale_list?.slice(0, 5).map((i, idx) => (
                        <TR key={idx} idx={idx}>
                          <td>{i.size}</td>
                          <td>{`$${i.sale_price}`}</td>
                          <td>{i.date}</td>
                          <td>{`${i.time.split("+")[0].slice(0, 5)} EST`}</td>
                        </TR>
                      ))}
                    </tbody>
                  </SalesTable>
                </ChartWrapper>
                <ChartSignUp isLoggedin={isLoggedin} />
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
                <HistoryNumber>{data["#_of_sales"]}</HistoryNumber>
                <HistoryTitle>price premium</HistoryTitle>
                <HistorySubTitle>(over original retail price)</HistorySubTitle>
                <HistoryNumber
                  palette={
                    data.price_premium?.includes("-") ? "#ff5a5f" : "#08a05c"
                  }
                >
                  {data.price_premium}
                </HistoryNumber>
                <HistoryTitle>average sale price</HistoryTitle>
                <HistoryNumber>{data.average_price}</HistoryNumber>
              </History>
            </FlexCenter>
          </Container>
        </LatestSales>
      </ProductContent>
      <Footer />
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
  background: ${({ bgColor }) => bgColor};
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 5px;
  }

  svg {
    width: 0.875em;
    margin-right: 4px;
    color: ${({ svgColor }) => svgColor};
  }
`;

const DropDownBtn = styled.button`
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 700;
  color: ${({ textColor }) => textColor};
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
      cursor: pointer;

      a {
        color: ${({ theme }) => theme.colors.footage};
        text-decoration: none;
      }

      &:not(:first-child)::before {
        content: "/";
        padding: 0 5px;
      }

      &::before {
        cursor: default;
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
  color: ${({ palette, theme }) => palette || theme.colors.green};
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
  display: ${({ isDisplayed }) => isDisplayed || "block"};
  margin-top: 5px;
  font-size: 15px;
  font-weight: 600;
  text-transform: capitalize;
  cursor: pointer;
`;

const SaleSizeDivider = styled.div`
  display: ${({ isDisplayed }) => isDisplayed || "block"};
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
  color: ${({ palette }) => palette || "#c6e6c2"};
  font-size: 18px;
`;

const BtnDivider = styled.div`
  height: 55px;
  margin: 0 18px;
  border-left: 1px solid ${({ palette }) => palette || "#348a28"};
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
  color: ${({ palette }) => palette || "#999"};
  font-weight: 600;
`;

const Percentage = styled.div`
  color: ${({ palette }) => palette || "#999"};
  font-weight: 600;
`;

const ProductMedia = styled.div`
  margin-top: 25px;
  min-height: 400px;
`;

const AroundView = styled.div`
  position: relative;
  ${({ theme }) => theme.flexColumnCenter};
  margin-bottom: 60px;
  width: 100%;
`;

const ProductInfo = styled.div`
  ${({ theme }) => theme.flexRowCenter};
  justify-content: space-between;
  margin-top: 20px;
`;

const DetailColumn = styled.div`
  display: flex;
  flex-direction: ${({ isColumn }) => (isColumn ? "column" : "row")};
  justify-content: ${({ isColumn }) =>
    isColumn ? "flex-start" : "space-around"};
  width: ${({ isColumn }) => (isColumn ? "30%" : "100%")};
`;

const Detail = styled.div`
  display: ${({ isDisplay }) => isDisplay || "flex"};
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.textBlack};
`;

const DetailTitle = styled.div`
  font: 400 20px "Bebas Neue", cursive;
  text-transform: uppercase;
  letter-spacing: 1.2px;
`;

const DetailContent = styled.div`
  margin-left: 10px;
  text-transform: uppercase;
  font: 100 20px "Bebas Neue", cursive;
  white-space: nowrap;
  font-size: 20px;
  letter-spacing: 1.2px;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const Description = styled.div`
  display: ${({ isVisible }) => isVisible};
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
        margin-left: 10px;
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
  margin-bottom: 50px;
  width: 100%;
`;

const GraphWrapper = styled.div`
  position: relative;
  width: 66.66666667%;
  height: 532px;
`;

const ChartWrapper = styled.div`
  position: absolute;
  bottom: -20px;
  width: 100%;
  background-color: #fff;
  z-index: 2;
`;

const ViewAllBtn = styled.button`
  margin: 25px 0 8px;
  color: ${({ theme }) => theme.colors.green};
  font: 500 16px;
`;

const SalesTable = styled.table`
  display: table;
  width: 100%;
  margin-bottom: 22px;
  border-spacing: 2px;

  thead {
    tr {
      border-collapse: separate;
      th {
        padding: 5px;
        border-bottom: 2px solid #ddd;
        :center ;
        font: 400 17px "Bebas Neue", cursive;
        letter-spacing: 1px;

        &:nth-of-type(1) {
          width: 16.6%;
        }
        &:nth-of-type(2) {
          width: 25%;
        }
        &:nth-of-type(3) {
          width: 30%;
        }
        &:nth-of-type(4) {
          width: 25%;
        }
      }
    }
  }
`;

const TR = styled.tr`
  background-color: ${({ idx }) => (idx % 2 ? "#f9f9f9" : "#fff")};

  td {
    padding: 5px;
    font: 600 13px;
  }
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
  padding: 22px 0 22px;
  color: ${({ palette, theme }) => palette || theme.colors.green};
  font-size: 36px;
  font-weight: 600;
  text-transform: uppercase;
`;
