/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whitesmoke: '#F5F5F5', // สี WhiteSmoke
        beige: '#F7EFE5',      // สี Beige
        pinkish: '#E2BFD9',    // สี Pinkish
        lavender: '#C8A1E0',   // สี Lavender
        deepPurple: '#674188', // สี Deep Purple
      },
    },
  },
  plugins: [],
}
