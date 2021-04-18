import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import axios from 'axios'
axios.defaults.baseURL = "https://api.onesnowwarrior.cn:8000/api";
let AUTH_TOKEN = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
