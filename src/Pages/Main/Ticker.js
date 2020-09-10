import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Ticker = () => {
  const [tickerData, setTickerData] = useState([]);
  const tickerFetch = () => {
    fetch("/data/ticker.json")
      .then((res) => res.json())
      .then((res) => setTickerData(res.data));
  };

  useEffect(() => {
    tickerFetch();
  }, []);

  return (
    <TickerContainer>
      <TickerText>
        {tickerData.map((el) => {
          return (
            <Symbol key={el.id}>
              <ClickZone>
                <Item>{el.title}</Item>
                {el.isup ? (
                  <PriceUp>${el.price}▲</PriceUp>
                ) : (
                  <PriceDown>${el.price}▼</PriceDown>
                )}
              </ClickZone>
            </Symbol>
          );
        })}
      </TickerText>
    </TickerContainer>
  );
};

const marquee = keyframes`
  0% {
    transform: translateX(100%);
  }

  100% {
    transform: translateX(-100%);
  }
`;

const TickerContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid ${(props) => props.theme.colors.white};
  line-height: 50px;
  font-size: 18px;
  font-weight: 600;
  background-color: #252525;
  z-index: 9999;
`;

const TickerText = styled.div`
  color: ${(props) => props.theme.colors.white};
  animation-name: ${marquee};
  animation-duration: 60s;
  animation-iteration-count: infinite;

  &:hover {
    animation-play-state: paused;
  }
`;

const Symbol = styled.span`
  margin-right: 50px;
  cursor: pointer;
`;

const ClickZone = styled.span``;

const Item = styled.span`
  margin-right: 6px;
`;

const PriceUp = styled.span`
  color: #08a05c;
`;

const PriceDown = styled.span`
  color: #ff5a5f;
`;

export default Ticker;
