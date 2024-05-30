import React from "react";
import { App } from "./App";
import { BrowserRouter } from "react-router-dom";
import { createRoot, hydrateRoot } from "react-dom/client";

import "./index.scss";

const container = document.getElementById("app");

const FullApp = () => (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

if (import.meta.hot || !container?.innerText) {
  const root = createRoot(container!);
  root.render(<FullApp />);
} else {
  hydrateRoot(container!, <FullApp />);
}
