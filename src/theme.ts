// src/theme.ts
import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#F5EFE3",
      paper: "#FFFFFF",
    },
    primary: {
      main: "#C77B30",
      dark: "#A56324",
      light: "#F5EFE3",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#155E75",
      contrastText: "#FFFFFF",
    },
    error: { main: "#C62828" },
    success: { main: "#2E7D32" },
    text: {
      primary: "#1B1B1B",
      secondary: "#6B5B53",
    },
  },
  typography: {
    fontFamily:
      '"Poppins", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", "Poppins", serif',
      fontWeight: 600,
    },
    h2: {
      fontFamily: '"Playfair Display", "Poppins", serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Playfair Display", "Poppins", serif',
      fontWeight: 600,
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 9999,
        },
        containedPrimary: {
          boxShadow: "0 8px 20px rgba(199, 123, 48, 0.35)",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
