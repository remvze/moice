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

    --color-blue: 59, 130, 246;

    --color-primary: 99, 102, 241;
    --color-secondary: 45, 212, 191;
    
    --color-success-500: #4ade80;
    --color-critical-500: 251, 113, 133;
    --color-info-500: #339af0;
    --color-warning-500: #fcc419;

    --font-xxxs: 11px;
    --font-xxs: 12px;
    --font-xs: 13px;
    --font-s: 14px;
    --font-m: 15px;
    --font-l: 18px;
    --font-xl: 28px;

    @media (max-width: 450px) {
      --font-xl: 25px;
    }

    --font-display: 'Inter', sans-serif;
    --font-heading: 'Inter', sans-serif;
    --font-body: 'Space Grotesk', sans-serif;

    --border-radius-m: 4px;
    --border-radius-l: 8px;

    /**
     * Gradients
     */
    --gradient-purple: #6366F1, #A78BFA;
    --gradient-purple-single: 99, 102, 241;

    --gradient-green: #4ADE80, #6EE7B7;
    --gradient-green-signle: 74, 222, 128;

    --gradient-blue: #3B82F6, #38bdf8;
    --gradient-blue-single: 59, 130, 246;

    --gradient-red: #F43F5E, #F472B6;
    --gradient-red-single: 244, 63, 94;
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
