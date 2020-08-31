import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};

  a {
    text-decoration:none;
    color:inherit;
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
  }
  
  body {
    font-family: Arial, Helvetica, sans-serif;
    background-color: white;
  }
`;

export default GlobalStyles;
