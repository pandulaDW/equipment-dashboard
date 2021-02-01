import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/_global.scss";
import "../node_modules/react-vis/dist/style.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
