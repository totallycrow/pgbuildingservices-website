module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      backgroundImage: theme => ({
        'bg-img': "url('/back1.jpg')",
        'bg-model': "url('/model.jpeg')",

        
       }),

       fontFamily: {
        
        'roboto': '"Roboto", Helvetica, Arial, sans-serif',
        'monts': '"Montserrat", Helvetica, Arial, sans-serif',
      },
       

    },
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
