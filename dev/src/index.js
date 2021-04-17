import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import axios from "axios";
axios.defaults.baseURL = "https://api.onesnowwarrior.cn:8000/api";
let AUTH_TOKEN =
  "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MiwiVXNlcm5hbWUiOiI3Nzc3Nzc3IiwiZXhwIjoxNjE4NjQ3MTc0LCJpYXQiOjE2MTg2Mzk5NzQsImlzcyI6Inh6aCIsIm5iZiI6MTYxODYzODk3NH0.AX2jvQMdNKWSyKk5-XyqEDCEtCmYtsZzvd4w9uydda2IZ32LcFGXuzWrJDcSQPUUHR-z5eeQffQSgLhk3nxwg-hho1gilvUIyLqn5gEjh9x630p5E-DMelS904zRi3QzuXqdVvRl3jVZK5PzPSxAdwG3yyRAJFhxdMLgO2G2jPU";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

ReactDOM.render(<App />, document.getElementById("root"));
