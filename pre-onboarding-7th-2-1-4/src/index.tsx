import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import GlobalStyle from "./lib/styles/Globalstyle";
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <GlobalStyle></GlobalStyle>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
