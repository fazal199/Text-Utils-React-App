/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      screens: {
        'laptop': {'max': '1132px'},
        'tablet': {'max': '860px'},
        'mobile': {'max': '554px'},
        'mobile-xs': {'max': '422px'},
      },
      fontSize : {
        'heading-adjust': ['calc(2.5rem + 1vw)', {'lineHeight':'2'}],
      },
      maxWidth : {
        'center'   : "74rem" ,
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
]

}

