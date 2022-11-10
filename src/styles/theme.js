/**
 * Priority Guide:
 * 1 -> Primary
 * 2 -> Secondary
 * ...
 */

const theme = {
  colors: {
    background: {
      1: 'var(--color-black)',
      2: 'var(--color-gray-900)',
      3: 'var(--color-gray-800)',
    },

    border: {
      1: 'var(--color-gray-600)',
    },

    neutral: {
      1: 'var(--color-gray-700)',
    },

    text: {
      1: 'var(--color-white)',
      2: 'var(--color-gray-100)',
      3: 'var(--color-gray-600)',
    },
  },

  fontSize: {
    xxs: '12px',
    xs: '13px',
    s: '14px',
    m: '15px',
    l: '18px',
    xl: '24px',
  },

  borderRadius: {
    m: '4px',
  },
};

export default theme;
