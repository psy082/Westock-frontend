import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

const Items = ({
  mostPopular,
  lowestAsk,
  highestBid,
  checkPopular,
  checkLowest,
  checkHighest,
}) => {
  const history = useHistory();

  const goToItem = (id) => {
    history.push(`/${id}`);
  };

  return (
    <>
      <ItemContainer>
        {checkPopular && (
          <>
            {mostPopular.map((el) => {
              return (
                <Item
                  key={el.product_id}
                  onClick={() => goToItem(el.product_id)}
                >
                  <ItemImageBox>
                    .
                    <ItemImage alt="" src={el.image} />
                  </ItemImageBox>
                  <ItemInfo>
                    <ItemName>{el.name}</ItemName>
                    <LowestAsk>Lowest Ask</LowestAsk>
                    <ItemPrice>${el.product_ask_price}</ItemPrice>
                    <Sold>{el.sale_count} Sold</Sold>
                  </ItemInfo>
                </Item>
              );
            })}
          </>
        )}
        {checkLowest && (
          <>
            {lowestAsk.map((el) => {
              return (
                <Item
                  key={el.product_id}
                  onClick={() => goToItem(el.product_id)}
                >
                  <ItemImageBox>
                    <ItemImage alt="" src={el.image} />
                  </ItemImageBox>
                  <ItemInfo>
                    <ItemName>{el.name}</ItemName>
                    <LowestAsk>Lowest Ask</LowestAsk>
                    <ItemPrice>${el.lowest_ask}</ItemPrice>
                    <LastSell>{el.release_date}</LastSell>
                  </ItemInfo>
                </Item>
              );
            })}
          </>
        )}
        {checkHighest && (
          <>
            {highestBid.map((el) => {
              return (
                <Item
                  key={el.product_id}
                  onClick={() => goToItem(el.product_id)}
                >
                  <ItemImageBox>
                    <ItemImage alt="" src={el.image} />
                  </ItemImageBox>
                  <ItemInfo>
                    <ItemName>{el.name}</ItemName>
                    <LowestAsk>Lowest Ask</LowestAsk>
                    <ItemPrice>${el.highest_bid}</ItemPrice>
                    <LastSell>{el.release_date}</LastSell>
                  </ItemInfo>
                </Item>
              );
            })}
          </>
        )}
      </ItemContainer>
    </>
  );
};

const ItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1170px;
  padding: 0 15px 0 15px;
`;

const Item = styled.div`
  max-width: 215px;
  border: ${(props) => props.theme.colors.lightGrey} 2px solid;
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
  background-color: ${(props) => props.theme.colors.lightGrey};
  padding: 16px;
  text-align: left;
`;

const ItemName = styled.div`
  height: 38px;
  margin-bottom: 6px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const LowestAsk = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.textGrey};
`;

const ItemPrice = styled.div`
  font-size: 22px;
  font-weight: 700;
`;

const LastSell = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.textGrey};
`;

const Sold = styled.div`
  font-size: 14px;
  color: ${(props) => props.theme.colors.textGrey};
`;

export default Items;
