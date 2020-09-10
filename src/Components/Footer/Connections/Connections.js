import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import GearButton from "./GearButton";

function Connections() {
  return (
    <Container>
      <Localization>
        {LOCALIZATION.map((local) => (
          <span>{local}</span>
        ))}
      </Localization>
      <SocialNetworks>
        <IconBlock>
          {Object.entries(SOCIAL_NETWORKS).map(([key, value]) => (
            <Icon key={key}>
              <Link to="#">
                <img alt={key} src={value} />
              </Link>
            </Icon>
          ))}
        </IconBlock>
        <IconBlock>
          {Object.entries(APPS).map(([key, value]) => (
            <Icon key={key}>
              <Link to="#">
                <img alt={key} src={value} />
              </Link>
            </Icon>
          ))}
        </IconBlock>
        <IconBlock>
          {Object.entries(DISABLED).map(([key, value]) => (
            <Icon key={key}>
              <Link to="#">
                <img alt={key} src={value} />
              </Link>
            </Icon>
          ))}
        </IconBlock>
      </SocialNetworks>
      <BuiltIn>
        <GearButton />
        <Link to="#">Proudly Built in Sunleung</Link>
      </BuiltIn>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1350px;
  min-height: 65px;
  margin: 10px auto;
`;

const Localization = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-width: 140px;
  height: 40px;
  padding: 0 5px;
  border: 1px solid #808080;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;

  span {
    padding: 0 10px;

    &:nth-child(2n + 2) {
      height: 50%;
      border-left: 1px solid;
      padding: 0px;
      color: #808080;
    }
  }
`;

const SocialNetworks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 420px;
`;

const IconBlock = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Icon = styled.div`
  padding: 8px;
  width: auto;

  a {
    text-decoration: none !important;
    cursor: pointer;

    img {
      height: 20px;
      margin-top: 0;
      vertical-align: middle;
    }
  }
`;

const BuiltIn = styled.div`
  margin: 10px 0;

  svg {
    display: inline-block;
    width: 1em;
    height: 1em;
    font-size: inherit;
    vertical-align: -0.125em;
    overflow: visible;
  }

  a {
    margin-left: 5px;
    color: #808080;
    text-decoration: none !important;
    cursor: pointer;
  }
`;

const LOCALIZATION = ["South Korea", "", "English en", "", "$ USD"];

const SOCIAL_NETWORKS = {
  twitter:
    "https://stockx-assets.imgix.net/svg/icons/twitter-footer.svg?auto=compress,format",
  facebook:
    "https://stockx-assets.imgix.net/svg/icons/facebook-footer.svg?auto=compress,format",
  instagram:
    "https://stockx-assets.imgix.net/svg/icons/instagram-footer.svg?auto=compress,format",
  youtube:
    "https://stockx-assets.imgix.net/emails/the-outsole/youtube-black.png?auto=compress,format",
};

const APPS = {
  apple:
    "https://stockx-assets.imgix.net/svg/icons/apple-logo-white.svg?auto=compress,format",
  android:
    "https://stockx-assets.imgix.net/svg/icons/android-logo-white.svg?auto=compress,format",
};

const DISABLED = {
  disabled:
    "https://stockx-assets.imgix.net/svg/icons/essentialAccessibilityIcon.svg?auto=compress,format",
};

export default Connections;
