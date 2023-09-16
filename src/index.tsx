import React from "react";
import ReactDOM from "react-dom";
import App from "./app";
import "./index.scss";
import { HashRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

ReactDOM.render(
  <HashRouter>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </HashRouter>,
  document.getElementById("root")
);
