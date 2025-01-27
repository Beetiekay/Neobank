/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
],
darkMode: 'class',
  theme: {
    varients: {
      extend:{
        backgroundColor: ['checked'],
      },
    },
    colors:{
     'black':'#000000',
     'gray':'#87808d',
     'lightgreen':'#c9f158',
     'Applegreen':'#98cb09',
     'white':'#fefefe',
     'Antiflashwhite':'#f1f2f5',
     'Amaranth':'#f84162',
     'orange':'#ffa500',
     'Malacite':'#38e349',
     'Darktangerine':'#38e349',
    },

  },
  plugins: [],
}

