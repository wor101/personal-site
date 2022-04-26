module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mackinaw': "url('./images/mackinaw_sunset_1.jpg')",
      },
      spacing: {
        '100': '30rem',
        '110': '40rem',
        '120': '50rem'
      }
    },
    fontFamily: {
      'koulen': ['Koulen'],
      'sans ': ['Source Sans Pro', 'sans-serif'],
      'mono': ['ui-monospace', 'SFMono-Regular']
    },
  },
  plugins: [],
}
