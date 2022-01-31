import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import api from "./utils/api";
import { SWRConfig } from "swr";
import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";

const options = {
  fetcher: (url) => api.get(url).then((res) => res.data),
};

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
    body1: {
      fontWeight: 500,
      fontSize: "1.5rem",
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

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <SWRConfig value={options}>
      <App />
    </SWRConfig>
  </ThemeProvider>,
  document.getElementById("root"),
);
