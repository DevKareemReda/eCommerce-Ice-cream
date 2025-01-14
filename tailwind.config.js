/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      screens: {
        xs: {'max': "300px"},
        smr: {'max': "539px"},
        xsr: {'max': "719px"},
        sm: '540px',
        md: '720px',
        lg: '960px',
        xl: '1140px',
      },
      colors: {
        "rose-pink": '#F83D8E',
        "dark-purple": '#683292',
        "deep-red": '#0F0200',
        "dark-charcoal": '#212529',
        "sunset-orange": '#FBAB2A',
      },
      fontFamily: {
        "berkshire": ['"Berkshire Swash"', 'serif'],
        "archivo": ['"Archivo"', 'serif'],
      },
      boxShadow: {
        '5xl-purple': '0px 3px 22px 3px rgba(104, 50, 146, 0.31)',
        '5xl-pink': '0px 3px 22px 3px rgba(248, 61, 142, 0.31)',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

