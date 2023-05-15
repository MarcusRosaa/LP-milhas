import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Sora', sans-serif;
    user-select: none;
  }
  
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  body {
    background: #edebe6;
  }

  /* Add more global styles as needed */
`;

export default GlobalStyles;
