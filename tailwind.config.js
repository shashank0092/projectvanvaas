// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          saffron: "#C77B30",
          saffronDark: "#A56324",
          saffronLight: "#F5EFE3",
          peacock: "#155E75",
          maroon: "#7B1E3A",
          bg: "#F5EFE3",
          surface: "#E2D4BF",
        },
        // MUI theme colors ko Tailwind me bhi available karane ke liye
        primary: {
          main: "#C77B30",
          dark: "#A56324",
          light: "#F5EFE3",
        },
        secondary: {
          main: "#155E75",
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', "serif"],
        body: ['"Poppins"', "system-ui", "sans-serif"],
        sans: [
          '"Poppins"',
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "sans-serif",
        ],
        serif: ['"Playfair Display"', "serif"],
      },
    },
  },
  plugins: [],
};
