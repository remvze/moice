/**
 * Priority Guide:
 * 1 -> Primary
 * 2 -> Secondary
 * ...
 */

const theme = {
  fontSize: {
    xxs: '12px',
    xs: '13px',
    s: '14px',
    m: '15px',
    l: '18px',
    xl: '28px',
  },

  bg: {
    alpha: 'var(--color-black)',
    beta: 'var(--color-gray-900)',
    gamma: 'var(--color-gray-800)',
    delta: 'var(--color-gray-700)',

    contrast: {
      alpha: 'var(--color-white)',
    },
  },

  fg: {
    alpha: 'var(--color-white)',
    beta: 'var(--color-gray-100)',
    gamma: 'var(--color-gray-600)',
    delta: 'var(--color-gray-700)',

    onContrast: {
      alpha: 'var(--color-black)',
    },
  },

  border: {
    alpha: 'var(--color-gray-600)',
  },
};

export default theme;
