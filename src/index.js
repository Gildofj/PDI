import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { Provider } from "react-redux";

import store from "./store";
import { ThemeProvider, SWRProvider } from "./config";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <SWRProvider>
        <App />
      </SWRProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root"),
);
