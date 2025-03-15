/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  container: {
    center: true,
    padding: '1rem',
    screens: {
      DEFAULT: '100%', // Ensures the container spans 100% width
    },
  },
  theme: {
    fontFamily: {
      'Roboto': ['Roboto', 'sans-serif'],
      'Poppins': ['Poppins', 'sans-serif'],
      'Jost': ['Jost', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};