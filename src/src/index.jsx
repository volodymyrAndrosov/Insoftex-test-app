import "./index.less";
import React from "react";
import App from "./components/App/App.jsx";
import { Provider } from "react-redux";
import { store } from "../src/state/reducers/index";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
