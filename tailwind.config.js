/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-400': 'hsl(252, 100%, 67%)',
        'primary-500': 'hsl(256, 72%, 46%)',
        'secondary-400': 'hsl(241, 81%, 54%)',
        'secondray-500': 'hsl(241, 72%, 46%)',
        'accent-1': 'rgb(255, 87, 87)',
        'accent-2': 'rgb(255, 176, 31)',
        'accent-3': 'rgb(0, 184, 141)',
        'accent-4': 'rgb(17, 37, 212)',
      },
      padding: {
        custom: '2.5rem calc(2.5rem * 1.5)',
      },
    },
    screens: {
      sm: '480px',
    },
    fontFamily: {
      Hanken: ['Hanken Grotesk', 'Arial', 'sans-serif'],
    },
  },
  plugins: [],
};
