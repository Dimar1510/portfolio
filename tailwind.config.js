/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "selector",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      phone: { max: "350px" },

      tablet: { max: "600px" },

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
      },
      animation: {
        scroll: "scroll 2s ease infinite",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtils = {
        ".custom-container": {
          maxWidth: "1200px",
          width: "100%",
          marginInline: "auto",
        },
        ".section": {
          padding: "6rem 2rem 2rem",
          maxWidth: "1200px",
          marginInline: "auto",
        },
      };
      addUtilities(newUtils);
    },
  ],
};
