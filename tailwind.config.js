/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', 'sans-serif'],
        playFair: ['"Playfair Display"', 'serif'],
        Montserrat: ['"Montserrat"', 'sans-serif'],
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scale(0)', opacity: '0.5' },
          '50%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(1)', opacity: '0' },
        },
      },
      animation: {
        grow: 'grow 1s ease-in infinite',
      },
    },
  },
  plugins: [],
}