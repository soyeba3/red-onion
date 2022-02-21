module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': {'min': '350px', 'max': '550px'},

      'md': {'min': '550px', 'max': '750px'},

      'lg': {'min': '1024px', 'max': '1279px'},

      'xl': {'min': '1280px', 'max': '1535px'},

      '2xl': {'min': '1536px'},
    },
    extend:{
      fontFamily: {
        Montserrat : ['Montserrat', 'sans-serif']
      },
    },
  },
  plugins: [],
}