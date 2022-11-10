/**
 * Weight Guide:
 * 900 -> Primary
 * 800 -> Secondary
 * ...
 */

const theme = {
  colors: {
    background: {
      900: 'var(--color-black)',
      800: 'var(--color-gray-900)',
      700: 'var(--color-gray-800)',
    },

    border: {
      900: 'var(--color-gray-600)',
    },

    neutral: {
      900: 'var(--color-gray-700)',
    },

    text: {
      900: 'var(--color-white)',
      800: 'var(--color-gray-100)',
      700: 'var(--color-gray-600)',
    },
  },

  fontSize: {
    xs: '13px',
    s: '14px',
    m: '15px',
    l: '18px',
    xl: '24px',
  },
};

export default theme;
