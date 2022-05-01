import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MoralisProvider } from "react-moralis";

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider serverUrl="https://yqvjty5xi0tb.usemoralis.com:2053/server" appId="qIhHVjQtgNaQxSwGy8hnySaMUf4mI7BH99IwEPec">
      <App />
    </MoralisProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
