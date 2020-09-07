import React, { Component } from "react";
import styled from "styled-components";

export default class Ticker extends Component {
  constructor() {
    super();
    this.state = {
      tickerData: [],
    };
  }

  tickerFetch = () => {
    fetch("/data/ticker.json")
      .then((res) => res.json())
      .then((res) => this.setState({ tickerData: res.data }));
  };

  componentDidMount = () => {
    this.tickerFetch();
  };

  render() {
    return (
      <TickerContainer>
        {this.state.tickerData.map((el) => {
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
      </TickerContainer>
    );
  }
}

const TickerContainer = styled.marquee`
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid white;
  line-height: 50px;
  font-size: 18px;
  font-weight: 600;
  background-color: #252525;
  color: white;
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