import React from "react";
import ReactDOM from "react-dom";
import Routes from "./Routes.js";
import "./Style.css";
// setting up redux
// need these in the index so that we can access the state in every component
import { createStore } from "redux";
import allReducers from "./reducers";
import { Provider } from "react-redux";
const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("root")
);
