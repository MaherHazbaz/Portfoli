/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        jump: {
          "0%, 100%": {
            transform: "translateY(0) scale(1) rotate(0deg)",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          },
          "50%": {
            transform: "translateY(-75px) scale(1.2) rotate(15deg)",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
          },
        },
      },
      animation: {
        jump: "jump 1s ease-in-out infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".clip-hexagon": {
          clipPath:
            "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
