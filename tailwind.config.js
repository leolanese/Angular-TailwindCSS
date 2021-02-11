module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.ts',
    './projects/**/*.html',
    './projects/**/*.ts'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
    },

    extend: {
      colors: {
        // Here is where you will add our new colors
        blue: {
          '100': '#72c1df',
          '200': '#5bb7d9',
          '300': '#43add4',
          '400': '#2ca2ce',
          '500': '#1498c9',
          '600': '#1289b5',
          '700': '#107aa1',
          '800': '#0e6a8d',
          '900': '#0c5b79'
        },
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
}