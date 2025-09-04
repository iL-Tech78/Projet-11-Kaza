import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./router/Router";
import "./styles/main.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
