import React, { useState } from "react";
import styled from "styled-components";
import { FOOTER_DESC } from "../../../itemData";

function FooterDesc({ series }) {
  const [more, setMore] = useState(false);

  return (
    <Container>
      <BorderLine />
      {!more && (
        <span>
          {series
            ? FOOTER_DESC.airJordan.series[series].normal
            : FOOTER_DESC.airJordan.normal}
          <MoreButton onClick={() => setMore(true)}>See More</MoreButton>
        </span>
      )}
      {more && (
        <MoreDesc>
          {series
            ? FOOTER_DESC.airJordan.series[series].more
            : FOOTER_DESC.airJordan.more}
        </MoreDesc>
      )}
    </Container>
  );
}

const Container = styled.div`
  font-family: sans-serif;
  font-size: 16px;
  color: rgb(46, 46, 46);
`;

const BorderLine = styled.div`
  border-top: 1px solid rgb(236, 236, 236);
  margin: 30px 0px;
`;

const MoreDesc = styled.span`
  height: 0px;
  overflow: hidden;
`;

const MoreButton = styled.span`
  margin-left: 3px;
  color: rgb(8, 160, 92);
  cursor: pointer;
`;

export default FooterDesc;
