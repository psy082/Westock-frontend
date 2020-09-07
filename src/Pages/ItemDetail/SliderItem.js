import React from "react";
import styled from "styled-components";

function SliderItem({ relatedProducts }) {
  return (
    <>
      {relatedProducts.map((el, idx) => (
        <SliderItemWrapper key={idx}>
          <FlexCenter>
            <img src={el.img} alt="" />
          </FlexCenter>
          <FlexColumn>
            <GreyContainer>
              <SliderItemName>{el.name}</SliderItemName>
              <SliderGreyTxt>Lowest Ask</SliderGreyTxt>
              <SliderValue>{`$${el.price}`}</SliderValue>
              <SliderGreyTxt>{`Last Sale: $${el.lastSale}`}</SliderGreyTxt>
            </GreyContainer>
          </FlexColumn>
        </SliderItemWrapper>
      ))}
    </>
  );
}

export default SliderItem;

const SliderItemWrapper = styled.li`
  position: relative;
  ${(props) => props.theme.flexColumnCenter};
  max-width: 215px;
  min-width: 215px;

  border-radius: 3px;
  border: 2px solid #fafafa;
  margin-right: 13px;

  img {
    position: relative;
    width: 100%;
    padding: 16px;
  }
`;

const FlexCenter = styled.div`
  ${(props) => props.theme.flexCenter};

  img {
    transition: transform 0.2s ease-in-out;
    &:hover {
      transform: scale(1.1);
      transition: transform 0.2s ease-in-out;
    }
  }
`;

const FlexColumn = styled.div`
  ${(props) => props.theme.flexColumn};
  width: 100%;
`;

const GreyContainer = styled.div`
  background-color: #fafafa;
  padding: 16px;
`;

const SliderItemName = styled.div`
  height: 38px;
  overflow: hidden;
  margin-bottom: 6px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.3;
`;

const SliderGreyTxt = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.3;
  color: ${(props) => props.theme.colors.textGrey};
`;

const SliderValue = styled.div`
  font-weight: 700;
  font-size:22px
  line-height: 1.3;
  text-align: left;
`;
