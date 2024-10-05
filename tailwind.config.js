import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Using modern `rgb`
        // primary: 'rgb(var(--color-primary) / <alpha-value>)',
        // secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        primary: '#D4EDFB',
        secondary: '#B2AC88', 
        tertiary: '#f0abfc'
  
       
      }
    },

    variants: {
      extend: {
        backgroundColor: ['hover', 'focus'],
      },
    },
    
  },
  darkMode: "class",
  plugins: [nextui()],
}
