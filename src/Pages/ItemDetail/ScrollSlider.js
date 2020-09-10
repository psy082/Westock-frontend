import React, { useState } from "react";
import styled from "styled-components";

export default function ScrollSlider({ getScrollIndex, isVisible }) {
  const [value, setValue] = useState(0);
  const handleOnChange = (e) => {
    setValue(e.target.value);
    getScrollIndex(e.target.value);
  };

  return (
    <Container
      isVisible={isVisible ? "" : "none"}
      idx={(value / 35) * 100 + "%"}
    >
      <div>
        <input
          type="range"
          min={0}
          max={35}
          value={value}
          onChange={handleOnChange}
        />
      </div>
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.flexCenter};
  display: ${({ isVisible }) => isVisible};
  width: 100%;

  div {
    width: 60%;

    input {
      flex: 1;
      -webkit-appearance: none;
      width: 100%;
      height: 5px;
      border-radius: 4px;
      background: linear-gradient(
        90deg,
        #999999 ${(props) => props.idx},
        #ececec 0%
      );
      background-color: #efefef;
      outline: none;

      &::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 17px;
        height: 17px;
        border: 2px solid;
        border-radius: 50%;
        cursor: grab;
        -webkit-transition: 2s;
        background-color: #fff;
      }
    }
  }
`;
