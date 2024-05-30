import * as React from "react";
import routes from "@/routes";
import { createRoot, hydrateRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.scss";

const container = document.getElementById("app");
let router = createBrowserRouter(routes);

const FullApp = () => (
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

if (import.meta.hot || !container?.innerText) {
  const root = createRoot(container!);
  root.render(<FullApp />);
} else {
  hydrateRoot(container!, <FullApp />);
}
