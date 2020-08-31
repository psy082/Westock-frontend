import { css } from "styled-components";

const colors = {
  textBlack: "#333333",
  textGrey: "rgba(0, 0, 0, 0.5)",
  textDarkGrey: "#808080",
  lightRed: "#ff5a5f",
  lightGrey: "#fafafa",
  mediumGrey: "#f5f5f5",
  footage: "#666666",
  footageHover: "#2e2e2e",
  boldGrey: "#ececec",
  green: "#08a05c",
  white: "#fff",
};

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const flexRowCenter = css`
  display: flex;
  justify-content: center;
`;

const flexColumn = css`
  display: flex;
  flex-direction: column;
`;

const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const theme = {
  colors,
  flexCenter,
  flexRowCenter,
  flexColumn,
  flexColumnCenter,
};

export default theme;
