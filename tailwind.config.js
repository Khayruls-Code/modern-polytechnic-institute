module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: "#00BFFF",
      secondary: "#0C2340",
      gray: "#efefef",
      white: "#fff",
      transparent: "rgba(255,255,255,0.2)"
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
