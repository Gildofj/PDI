import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import api from "./utils/api";
import { SWRConfig } from "swr";
import { ThemeProvider } from "@material-ui/styles";
import {
  createTheme,
  CssBaseline,
  responsiveFontSizes,
} from "@material-ui/core";

const options = {
  fetcher: (url) => api.get(url).then((res) => res.data),
};

let theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          background: "#F6F7EB",
          color: "#262626",
          padding: "5px",
        },

        body: {
          height: "98vh",
          width: "100%",
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
    body1: {
      fontWeight: 500,
      fontSize: "1.5rem",
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

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <SWRConfig value={options}>
      <App />
    </SWRConfig>
  </ThemeProvider>,
  document.getElementById("root"),
);
