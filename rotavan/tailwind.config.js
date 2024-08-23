/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#404040',
        customYellow: '#FAA72B',
        customBlue: '#0F3282'
      },
      backgroundImage: {
        headerBottomImage: "url('/src/assets/frota-bg.svg')"
      },
      width: {
        newSize65: '65%'
      },
      height: {
        newsize55: '55vh'
      }
    },
  },
  plugins: [],
}