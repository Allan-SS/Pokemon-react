import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import GlobalState from "./global/GlobalState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalState>
      <App />
    </GlobalState>
  </React.StrictMode>
);
