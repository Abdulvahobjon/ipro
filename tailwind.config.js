/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "service-gradiend":"linear-gradient(180deg, #252527 30.75%, #0186EF00 615.25%)",
        "service-bg":"linear-gradient(0deg, #141415 0%, #141415 100%), #FFF"
      },
    },
  },
  plugins: [],
}
