const theme = {
  bg: {
    alpha: 'var(--color-black)',
    beta: 'var(--color-gray-900)',
    gamma: 'var(--color-gray-800)',
    delta: 'var(--color-gray-700)',

    contrast: {
      alpha: 'var(--color-white)',
    },

    accent: {
      primary: 'var(--color-primary)',
      critical: 'var(--color-critical-500)',
      success: 'var(--color-success-500)',
      warning: 'var(--color-warning-500)',
      info: 'var(--color-info-500)',
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

    onAccent: {
      primary: 'var(--color-white)',
      critical: 'var(--color-white)',
    },

    accent: {
      primary: 'var(--color-primary)',
      critical: 'var(--color-critical-500)',
      success: 'var(--color-success-500)',
      warning: 'var(--color-warning-500)',
      info: 'var(--color-info-500)',
    },
  },

  border: {
    alpha: 'var(--color-gray-600)',
  },

  gradient: {
    primary: 'var(--gradient-blue)',
    critical: 'var(--gradient-red)',
    success: 'var(--gradient-green)',
  },
};

export default theme;
