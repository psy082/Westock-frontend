import React from "react";
import styled from "styled-components";

function EmailOption() {
  return (
    <OptionEmail>
      <BottomBorder />
      <CenterText>OR</CenterText>
      <BottomBorder />
    </OptionEmail>
  );
}

const OptionEmail = styled.div`
  margin-top: 8px;
  ${(props) => props.theme.flexCenter}
`;

const BottomBorder = styled.div`
  border-bottom: 1px solid #cecece;
  flex-grow: 1;
`;

const CenterText = styled.div`
  margin: 0 10px;
  color: #949494;
  font-weight: 500;
  font-size: 12px;
  letter-spacing: 0.5px;
`;

export default EmailOption;
