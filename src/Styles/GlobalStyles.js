import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};

  ul,
  ol {
    list-style: none;
  }
  
  a,
  a:visited {
    text-decoration: none;
  }

  *:focus {
    outline: none;
  }

  button {
    border: none;
    outline: none;
    text-shadow: none;
    background: none;
    cursor: pointer;
  }

  * {
    box-sizing: border-box;
    font: inherit;
  }
  
  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: white;
  }
`;

export default GlobalStyles;
