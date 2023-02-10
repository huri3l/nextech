/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      nthxs: '390px',
      nth2xs: '350px',
    },
    extend: {
      colors: {
        'nth-gray-900': '#161819',
        'nth-gray-800': '#2D3134',
        'nth-gray-700': '#404040',
        'nth-gray-600': '#5C646B',
        'nth-gray-500': '#737373',
        'nth-gray-400': '#A6A6A6',
        'nth-gray-300': '#B3B3B3',
        'nth-gray-200': '#C5CACD',
        'nth-green-500': '#43F46A',
        'nth-red-500': '#F45943',
      },
      fontFamily: {
        display: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      spacing: {
        0.5: '0.125rem',
        18: '4.5rem',
        80: '20rem',
        104: '26rem',
        108: '27rem',
        250: '62.5rem',
      },
    },
  },
  plugins: [],
};
