/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Montserrat", "monospace"],
    },
    extend: {
      colors: {
        'custom-brown': '#dbab79',
        'orange':"#dd4b25",
      },
    },
  },
  plugins: [require("daisyui")],
};
