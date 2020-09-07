import React, { useState, useEffect } from "react";
import styled from "styled-components";

export default function SizePopUp(props) {
  const [sizeList, setSize] = useState([]);
  const [selected, setSelected] = useState(1);
  const { isActive, getSize, closePopUp } = props;

  useEffect(() => {
    fetch("Data/ItemdetailData.json")
      .then((res) => res.json())
      .then((res) => setSize(res.sizeList));
  }, []);

  const selectSize = (idx) => {
    setSelected(idx);
    getSize(idx - 1);
    closePopUp();
  };

  return (
    <PopUp
      visibility={isActive ? "visible" : "hidden"}
      opacity={isActive ? 1 : 0}
    >
      <Header>
        <Gender>select a u.s. men's size</Gender>
        <SizeChart>size chart</SizeChart>
      </Header>
      <SizeList>
        <ul>
          {sizeList?.map((el, idx) => (
            <ListItem
              key={el.size}
              onClick={() => selectSize(idx + 1)}
              selected={selected}
            >
              <Size>{`US ${el.size}`}</Size>
              <Value>{`$${el.lowestAsk}`}</Value>
            </ListItem>
          ))}
        </ul>
      </SizeList>
    </PopUp>
  );
}

const PopUp = styled.div`
  position: absolute;
  top: 30%;
  width: 343px;
  border: 1px solid none;
  padding: 2.5px;
  background: #fff;
  visibility: ${(props) => props.visibility};
  opacity: ${(props) => props.opacity};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  text-transform: uppercase;
  transition-property: opacity;
  transition: 0.3s ease;
  z-index: 2;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 14px;
`;

const Gender = styled.div`
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 700;
  padding-left: 10px;
  color: #333;
`;

const SizeChart = styled.div`
  font-size: 14px;
  text-transform: capitalize;
  color: ${(props) => props.theme.colors.green};
  padding-right: 10px;
  cursor: pointer;
`;

const SizeList = styled.div`
  ul {
    display: flex;
    flex-wrap: wrap;
    height: 372px;
    overflow: auto;
  }
`;

const ListItem = styled.li`
  ${(props) => props.theme.flexColumnCenter};
  width: 100%;
  height: 58px;
  border: 1px solid #d9d9d8;
  border-radius: 3px;
  margin: 6px;
  padding: 6px;
  cursor: pointer;

  &:hover {
    background-color: #eef7eb;
  }

  &:not(:first-child) {
    width: calc(100% / 4 - 12px);
  }

  &:nth-child(${(props) => props.selected || "1"}) {
    background-color: #eef7eb;
  }
`;

const Size = styled.span`
  font: 400 20px "Bebas Neue", cursive;
  color: #333;
`;

const Value = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: ${(props) => props.theme.colors.green};
`;
