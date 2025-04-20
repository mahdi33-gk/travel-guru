/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: 'rgb(249, 165, 26)'
      },
      fontFamily:{
        bebas: "Bebas Neue", 
        monster: "Montserrat",
      }
    },
  },
  plugins: [require("daisyui")],
}

