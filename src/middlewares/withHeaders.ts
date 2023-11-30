import { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";
import { MiddlewareFactory } from "./types";

export const withHeaders: MiddlewareFactory = (next: NextMiddleware) => {
  return async (req: NextRequest, _event: NextFetchEvent) => {
    const response = await next(req, _event);
    if (response) {
      const requestHeaders = new Headers(req.headers);

      // Store current request pathname in a custom header
      requestHeaders.set("x-pathname", req.nextUrl.pathname);
      response.headers.set("x-pathname", req.nextUrl.pathname);
    }
    return response;
  };
};
