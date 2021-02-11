module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.ts',
    './projects/**/*.html',
    './projects/**/*.ts'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
            colors: {
            // Here is where you will add our new colors
      }
    },
  },
  variants: {},
  plugins: [],
}