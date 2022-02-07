import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import reducers from "./reducers";

const enhancer = compose(
  applyMiddleware(thunk),
  // Devtools Redux
  process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : undefined,
);

export default createStore(reducers, undefined, enhancer);
