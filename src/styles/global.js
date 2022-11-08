import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --vh: 1vh;
    --z-filters: 10;
    --z-settings-overlay: 13;
    --z-settings: 15;
    --z-modal-overlay: 20;
    --z-modal: 25;
    --z-snackbar: 30;
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
    font-size: 15px;
  }

  body {
    font-family: 'Space Grotesk', sans-serif;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
