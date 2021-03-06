import {
  createTheme,
  ThemeProvider as ThemeProviderMUI,
  responsiveFontSizes,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

export default function ThemeProvider({ children }) {
  let theme = createTheme({
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          html: {
            background: "#F6F7EB",
            color: "#262626",
            padding: "5px",
            height: "100%",
          },
          body: {
            height: "100%",
            width: "100%",

            "div#root": {
              height: "100%",
            },
          },
          a: {
            textDecoration: "none",
            color: "#262626",
          },
        },
      },
    },

    typography: {
      h3: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 600,
      },
      body1: {
        fontWeight: 500,
        fontSize: "1rem",
        color: "#262626",
      },
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Rubik",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
    },
  });

  theme = responsiveFontSizes(theme);

  return (
    <ThemeProviderMUI theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProviderMUI>
  );
}
