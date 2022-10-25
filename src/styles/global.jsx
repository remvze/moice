import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: 'Space Grotesk', sans-serif;
  }
`;

export default GlobalStyles;
