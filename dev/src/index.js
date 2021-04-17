import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
import axios from "axios";
axios.defaults.baseURL = "https://api.onesnowwarrior.cn:8000/api";
let AUTH_TOKEN =
"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJJZCI6MSwiVXNlcm5hbWUiOiJhZG1pbjEyMyIsImV4cCI6MTYxODY2NzkzNSwiaWF0IjoxNjE4NjYwNzM1LCJpc3MiOiJ4emgiLCJuYmYiOjE2MTg2NTk3MzV9.rfbMfToI19R_dFpEl8JWF9DqpymSzI4w0EHrpMJ7KYglrnhMQNaiaMQhN_ZcjnoJpyPs35VyIcSKOIMtCX44zg51yKaOYKh2_QyL9G3FhVghJ72xQdJ5fwh6DrNrZaIoe_TzgYln44CZrUGS6xHO_-KtFp1tyULnudJGnDQO1do";
axios.defaults.headers.common["Authorization"] = AUTH_TOKEN;

ReactDOM.render(<App />, document.getElementById("root"));
