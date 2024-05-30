import React from "react";
import { App } from "./App";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

import "./index.scss";

export function render(url: string) {
  return ReactDOMServer.renderToString(
    <React.StrictMode>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </React.StrictMode>,
  );
}
