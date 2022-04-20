module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mackinaw': "url('./images/mackinaw_sunset_1.jpg')",
      }
    },
    fontFamily: {
      'koulen': ['Koulen'],
      'poppins': ['Poppins'],
      'sans ': ['Source Sans Pro', 'sans-serif'],
      'mono': ['ui-monospace', 'SFMono-Regular']
    },
  },
  plugins: [],
}
