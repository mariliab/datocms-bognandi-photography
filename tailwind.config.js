module.exports = {
  //purge: ["./src/**/*.html", "./components/**/*.js"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    borderWidth: {
      1: "1px",
    },
    extend: {
      zIndex: {
        "-1": "-1",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
        beige: {
          lightest: "#f6f2ef",
          "light-hover": "#EEE6E0",
          light: "#ddcdc1",
          DEFAULT: "#ac8266",
          dark: "#5B4B3F",
          darkest: "#2d251f",
        },
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        small: "0 5px 10px rgba(0, 0, 0, 0.12)",
        medium: "0 8px 30px rgba(0, 0, 0, 0.12)",
      },
      typography: {
        lg: {
          css: {
            img: {
              marginTop: "0",
              marginBottom: "0",
            },
          },
        },
      },
      scale: {
        101: "1.01",
      },
    },
    minWidth: {
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
    },
    maxHeight: {
      "800px": "800px",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
