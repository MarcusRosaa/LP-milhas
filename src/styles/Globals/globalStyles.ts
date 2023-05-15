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

  body {
    background: #edebe6;
    height: 100vh;
  }

  /* Add more global styles as needed */
`;

export default GlobalStyles;
