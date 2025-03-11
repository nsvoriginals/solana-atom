export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Nue: ["Nue", "sans-serif"],
      NueOut:["NueOut","sans-serif"],
      Nokia:["Nokia","sans-serif"]
    
    },
    extend: {
     
    },
  },
  plugins: [require("tailwindcss-animate")],
};