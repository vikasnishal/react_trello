import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import style from "./style.css";

ReactDOM.render(<App />, document.getElementById("app"));

module.hot.accept();
