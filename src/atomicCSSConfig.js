const sizes = {
  's-6': '8px',
  's-5': '9px',
  's-4': '11px',
  's-3': '12px',
  's-2': '13px',
  's-1': '15px',
  's0': '16px',
  's1': '19px',
  's2': '21px',
  's3': '24px',
  's4': '28px',
  's5': '32px',
  's6': '48px',
  's7': '62px',
  's8': '80px',
  's9': '96px',
};

const colors = {
  'darkdd': '#071518',
  'darkd': '#0f1b1e',
  'dark': '#161f21',
  'darkl': '#2f383b',
  'darkll': '#495a5c',
  'light': '#e0e9eb',
  'lightl': '#fafbfb',
  'lightll': '#ffffff',
  'lightd': '#b4cacf',
  'lightdd': '#7fa0a8',
  'r': '#f24432',
  'rd': '#d2210f',
  'rdd': '#a51101',
  'rl': '#ff6958',
  'rll': '#ff8d81',
};

module.exports = {
  cssDest: './static/main.css',
  options: {
    namespace: '#___gatsby',
  },
  configs: {
    breakPoints: {
      xs: '@media(min-width:350px)',
      sm: '@media(min-width:700px)',
      md: '@media(min-width:1000px)',
      lg: '@media(min-width:1200px)',
    },
    custom: {
      ...sizes,
      ...colors,
      'underline': `inset 0 -3px 0 0 ${colors.light}`,
      'release': 'calc(-50vw + 50%)',
      colorFade: 'color .2s ease-in-out',
      'sans': '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      'mono': 'monospace',
    },
    classNames: []
  },
};
