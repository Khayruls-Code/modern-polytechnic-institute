module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: "#00BFFF",
      secondary: "#0C2340",
      gray: "#efefef",
      white: "#fff"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
