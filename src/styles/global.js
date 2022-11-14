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
     * 500 -> Base
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

    --color-blue-500: #096bff;

    --font-xxs: 12px;
    --font-xs: 13px;
    --font-s: 14px;
    --font-m: 15px;
    --font-l: 18px;
    --font-xl: 28px;

    --font-display: 'Newsreader', serif;
    --font-heading: 'Inter', sans-serif;
    --font-body: 'Space Grotesk', sans-serif;

    --border-radius-m: 4px;
    --border-radius-l: 8px;

    --gradient-blue: #096bff, #35aaff;
    --gradient-red: #f77062, #fe5196;
    --gradient-green: #81fbb8, #28c76f;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font: inherit;
  }

  html, body {
    height: 100%;
    background-color: ${({ theme }) => theme.bg.alpha};
    color: ${({ theme }) => theme.fg.alpha};
    line-height: 1.6;
    font-size: var(--font-m);
  }

  body {
    font-family: var(--font-body);
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles;
