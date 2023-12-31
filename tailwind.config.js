/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        "service-gradiend":"linear-gradient(180deg, #252527 30.75%, #0186EF00 615.25%)",
        "service-bg":"linear-gradient(0deg, #141415 0%, #141415 100%), #FFF"
      },
      boxShadow: {
        'custom': '0px 0px 10px 2px #0186EF',
        'custom-form': '0px 0px 5px 1px #0186EF',
        'about-btn': '0px 1px 14px -4px #016079',
        "about-disc": "0px 0px 50px 4px #0086EE;",
        "portfolio-item-text": "0px 0px 6.800000190734863px rgba(255,255,255,0.25)"
      }

    },
  },
  plugins: [],
}
