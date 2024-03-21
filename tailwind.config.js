/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      supplementary: {
        900: '#1F1E1D',
        800: '#2D2E32',
        700: '#3B3D44',
        600: '#676973',
        500: '#797B84',
        400: '#9598A5',
        300: '#A8ABB9',
        200: '#C5C7D0',
        100: '#DCDEE5',
        50: '#F1F2F6',
        '00': '#F5F6F8',
      },
      primary: {
        900: '#bd0811',
        800: '#d50e1f',
        700: '#d91225',
        600: '#dd162c',
        500: '#e11931',
        400: '#e63c50',
        300: '#ea5e6f',
        200: '#f08c98',
        100: '#f6bac1',
        50: '#ffeaec',
      },
      basic: {
        white: '#ffffff',
        opacity: '#1F1E1D99',
        transparent: 'transparent',
      },
      secondary: {
        1000: '#263076',
        900: '#0047a7',
        800: '#005ab4',
        700: '#0064bb',
        600: '#006fc2',
        500: '#0077c8',
        400: '#268bd0',
        300: '#4da0d9',
        200: '#5fa9dd',
        100: '#80bbe4',
        50: '#e5f3fb',
      },
      green: {
        1000: '#41A882',
        900: '#14810a',
        800: '#229d13',
        700: '#28a518',
        600: '#30ae1c',
        500: '#35b520',
        400: '#53c041',
        300: '#72cb63',
        200: '#9ada90',
        100: '#c2e9bc',
        50: '#e7f6e4',
      },
      red: {
        700: '#ff6166',
        400: '#ff9094',
        200: '#ffc3c6',
        100: '#fff6f7',
      },
    },
    extend: {
      transitionDuration: {
        DEFAULT: '300ms',
      },
      keyframes: {
        'fade-in-top': {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-right': {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'fade-in-bottom': {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        'fade-in-top': 'fade-in-top 0.5s ease-in-out',
        'fade-in-right': 'fade-in-right 0.5s ease-in-out',
        'fade-in-bottom': 'fade-in-bottom 0.5s ease-in-out',
        'fade-in-left': 'fade-in-left 0.5s ease-in-out',
        blink: 'blink 1s step-start infinite',
      },
      screens: {
        tablet: '431px', // for Iphone 14 PRO MAX
        laptop: '768px',
        desktop: '1440px',
      },
    },
  },
  plugins: [],
}
