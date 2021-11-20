import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles.css";

const app = document.getElementById("app");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  app,
);

// to log performance pass a function to this, eg. reportWebVitals(console.log)
reportWebVitals();
