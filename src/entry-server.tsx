import * as React from "react";
import routes from '@/routes'
import createFetchRequest from '../request'
import ReactDOMServer from "react-dom/server";
import { createStaticHandler, createStaticRouter, StaticRouterProvider, type StaticHandlerContext } from "react-router-dom/server";

import type { Request, Response } from 'express'

import "./index.scss";

export async function render(req: Request, res: Response) {
  let handler = createStaticHandler(routes)
  let fetchRequest = createFetchRequest(req, res)

  let context = await handler.query(fetchRequest) as StaticHandlerContext

  let router = createStaticRouter(
    handler.dataRoutes,
    context
  );

  if (
    context instanceof Response &&
    [301, 302, 303, 307, 308].includes(context.status)
  ) {
    return res.redirect(
      context.status as number,
      context.headers.get("Location") as string
    );
  }

  return ReactDOMServer.renderToString(
    <StaticRouterProvider
      router={router}
      context={context}
    />
  );
}
