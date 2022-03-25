module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{astro,js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      'bye-white': '#ffffff',
      'bye-black': '#000000',
      'bye-earth': '#0F0A07',
      'bye-grey': '#eeeeee',
      'bye-taupe': {
        50: '#E8E3DC',
        100: '#A89D87',
        200: '#665F52',
      },
  },
  plugins: [],
},
};
