module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      "sans": ["GeoSansLight", "sans-serif"],
    },
    colors: {
      "bye-white": "#ffffff",
      "bye-black": "#000000",
      "bye-earth": "#0F0A07",
      "bye-earth-red": "#30140B",
      "bye-grey": "#eeeeee",
      "bye-taupe": {
        50: "#E8E3DC",
        100: "#A89D87",
        200: "#665F52",
      },
    },
    extend: {
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "35v": "35vh",
        "40v": "40vh",
        "45v": "65vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
    },
  },
};
