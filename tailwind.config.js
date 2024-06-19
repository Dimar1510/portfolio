/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: { max: "400px" },

      tablet: { max: "550px" },

      laptop: { max: "768px" },

      desktop: { max: "1000px" },
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        "body-clr": "var(--body-color)",
        "text-clr": "var(--text-color)",
        "container-clr": "var(--container-color)",
        "title-clr": "var(--title-color)",
        "title-dark-clr": "var(--title-color-dark)",
        "accent-clr": "var(--accent-color)",
      },
      fontFamily: {
        body: "var(--body-font)",
      },
      keyframes: {
        scroll: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(4rem)" },
        },
        rotate: {
          "0%": { transform: "rotate(0)" },
          "100%": { transform: "rotate(1turn)" },
        },
      },
      animation: {
        scroll: "scroll 2s ease infinite",
        rotate: "rotate 1s ease",
      },
    },
  },
  plugins: [
    plugin(({ addComponents, theme }) => {
      addComponents({
        ".custom-container": {
          maxWidth: "1200px",
          width: "100%",
          marginInline: "auto",
        },
        ".section": {
          paddingInline: "1rem",
          maxWidth: "1200px",
          marginInline: "auto",
        },
      });
    }),
  ],
};
