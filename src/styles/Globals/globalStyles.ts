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

.bot-message {
  transform: translateX(-100%);
  opacity: 0;
  animation: slideInFromLeft .6s ease-in-out forwards;
  animation-delay: 1s;
}

.user-message {
  animation: slideInFromRight 0.2s ease-in-out;
}

@keyframes slideInFromLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes slideInFromRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  25% {
    opacity: 0;
    transform: translateX(75%);
  }

  50% {
    opacity: 0;
    transform: translateX(50%);
  }

  75% {
    opacity: 0;
    transform: translateX(25%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}


  /* Add more global styles as needed */
`;

export default GlobalStyles;
