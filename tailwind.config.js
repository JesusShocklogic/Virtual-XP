module.exports = {
  purge: ['./index.html', 'src/**/*/.{vue|jsx|tsx|js|ts}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        main: '#4c28b5',
        'main-hover': '#341492',
        bgcolor: '#ebf0f3',
        card: '#ffffff',
        text: '#202020',
        subtle: '#6e6e6e'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
