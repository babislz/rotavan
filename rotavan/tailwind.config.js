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
      },
      backgroundImage: {
        headerBottomImage: "url('/src/assets/frota-bg.svg')"
      }
    },
  },
  plugins: [],
}