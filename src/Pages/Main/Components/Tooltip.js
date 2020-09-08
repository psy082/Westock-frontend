import React from "react";
import styled from "styled-components";
import QuestionMark from "./QuestionMark";

export default function Tooltip(props) {
  const { label } = props;
  return (
    <Inline>
      <Container>
        <QuestionMark />
        <Tip>{label}</Tip>
      </Container>
    </Inline>
  );
}

const Inline = styled.div`
  position: absolute;
  display: inline-block;
`;
const Container = styled.div`
  display: flex;
  margin: 0 auto;
`;

const Tip = styled.span`
  position: relative;
  top: -25px;
  left: 25px;
  width: 396px;
  padding: 9px 14px;
  background-color: white;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  font: 400 16px "proxima-nova, sans-serif";
  color: ${(props) => props.theme.colors.textBlack};
  opacity: 0;
  transition: all 0.3s;
  visibility: hidden;
`;
