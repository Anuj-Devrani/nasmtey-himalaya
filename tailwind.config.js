const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-white-bg': '#FEFCFB',
      },
      backgroundSize: {
        32: '8rem',
        48: '12rem',
        64: '16rem',
        112: '28rem',
      },
      fontFamily: {
        comfortaa: ['var(--comfortaa-font)', ...fontFamily.sans],
        robotoslab: ['var(--roboto-slab-font)', ...fontFamily.serif],
        quattrocentosans: ['var(--quattrocento-sans-font)', ...fontFamily.sans],
      },
      transitionDelay: {
        0: '0ms',
        10000: '10000ms',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#F66A0A',
          secondary: '#5200FA',
          accent: '#37CDBE',
          neutral: '#3D4451',
          'base-100': '#FEFCFB',
          info: '#3ABFF8',
          success: '#36D399',
          warning: '#FBBD23',
          error: '#F87272',
        },
      },
    ],
  },
}
