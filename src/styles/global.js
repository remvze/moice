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

    /**
     * Weight Guide:
     * 900 -> Darkest
     * 50 -> Lightest
     */

    --color-black: #080808;
    --color-white: #fefefe;

    --color-gray-900: #181818;
    --color-gray-800: #282828;
    --color-gray-700: #383838;
    --color-gray-600: #484848;
    --color-gray-500: #585858;
    --color-gray-400: #686868;
    --color-gray-300: #787878;
    --color-gray-200: #888888;
    --color-gray-100: #989898;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
  }

  html, body {
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background[900]};
    color: ${({ theme }) => theme.colors.text[900]};
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
