/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    container: {
      center:true,
      padding: {
        default : "1",
        lg:"10rem"
      }
    }
  },
  plugins: [],
}
