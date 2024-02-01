/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'bright-blue': '#3a7bfd',
      "Very-Light-Gray": "hsl(0, 0%, 98%)",
      "Very-Light-Grayish-Blue":"hsl(236, 33%, 92%)",
      "Light-Grayish-Blue": "hsl(233, 11%, 84%)",
      "Dark-Grayish-Blue": "hsl(236, 9%, 61%)",
      "Very-Dark-Grayish-Blue": "hsl(235, 19%, 35%)",
      //Dark Theme
      "Very-Dark-Blue": "hsl(235, 21%, 11%)",
      "Very-Dark-Desaturated-Blue": "hsl(235, 24%, 19%)",
      "Light-Grayish-Blue": "hsl(234, 39%, 85%)",
      "Light-Grayish-Blue-hover" /*(hover)*/: "hsl(236, 33%, 92%)",
      "Dark-Grayish-Blue": "hsl(234, 11%, 52%)",
      "Very-Dark-Grayish-Blue": "hsl(233, 14%, 35%)",
      "Very-Dark-Grayish-Blue": "hsl(237, 14%, 26%)",
      "red": "#D00101"
    },
    extend: {
      
    },
  },
  plugins: [],
}

