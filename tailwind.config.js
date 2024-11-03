/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-green":"#00CC33",
        "color-primary":"#e6fff2",
      }
    },
    container:{
      center:true,
      padding:{
        default: "20px",
        md:"50px"
      }
    }
  },
  plugins: [],
}

