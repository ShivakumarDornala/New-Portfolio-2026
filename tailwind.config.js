/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: { 
      spacing: {
        '150px': '9.375rem',    // Example: mt-72 or ml-72
        '84': '21rem',
        '96': '24rem',
        'custom': '5.5rem', // mt-custom or ml-custom
      },  
    },
  },
  plugins: [
  require('tailwindcss-motion')
  ],
}

