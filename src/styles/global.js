import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --vh: 1vh;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
  }

  html, body {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
    line-height: 1.6;
    font-size: 16px;
  }

  body {
    font-family: 'Space Grotesk', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
