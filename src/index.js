import React from "react";
import ReactDOM from "react-dom";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Provider } from "react-redux";

import App from "./App";
import store from "./store";
import { ThemeProvider, SWRProvider } from "./config";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider>
      <SWRProvider>
        <DndProvider backend={HTML5Backend}>
          <App />
        </DndProvider>
      </SWRProvider>
    </ThemeProvider>
  </Provider>,
  document.getElementById("root"),
);
