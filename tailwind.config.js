// tailwind.config.js
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', "sans-serif"],
        kantumruy: ['"Kantumruy Pro"', "sans-serif"],
        KhBattamabng: ["Khmer OS Battambang"],
        KhMuolLight: ["Khmer OS Muol Light"],
        moul: ["Moul"],
        tacteing: ["Tacteing"],
      },
    },
  },
  plugins: [],
};
