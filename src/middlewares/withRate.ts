import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from "next/server";
import rateLimit from "express-rate-limit";
import slowDown from "express-slow-down";
import { MiddlewareFactory } from "./types";
import { GetServerSideProps } from "next";
const applyMiddleware = (middleware: any) => (request: any, response: any) =>
  new Promise((resolve, reject) => {
    middleware(request, response, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  let ip =
    req.headers["x-forwarded-for"] ||
    req.headers["x-real-ip"] ||
    req.connection.remoteAddress;
  if (!ip) {
    const forwardedFor = req.headers["x-forwarded-for"];
    if (Array.isArray(forwardedFor)) {
      ip = forwardedFor[0];
    } else {
      ip = forwardedFor?.split(",")[0] ?? "Unknown";
    }
  }
  return {
    props: {
      ip,
    },
  };
};

export const withRate: MiddlewareFactory = (next: NextMiddleware) => {
  return async (req: NextRequest, _event: NextFetchEvent) => {
    if (!req.headers || typeof req.headers.get !== "function") {
      // Handle the case where headers are missing or do not have the 'get' method.
      return new NextResponse("Invalid request headers", { status: 400 });
    }

    const response = await next(req, _event);
    if (response) {
      const getIP = (request: any) => {
        return (
          request.headers.get("x-forwarded-for") ||
          request.headers.get("x-real-ip") ||
          "Unknown"
        );
      };

      const getRateLimitMiddlewares = () => {
        const max = 3;
        const windowMs = 12 * 60 * 60 * 1000;
        const keyGenerator = getIP;

        return [
          slowDown({ keyGenerator, windowMs }),
          rateLimit({ keyGenerator, windowMs, max }),
        ];
      };
      const middlewares = getRateLimitMiddlewares();
      const applyRateLimit = async (request: any, response: any) => {
        await Promise.all([
          middlewares
            .map(applyMiddleware)
            .map((middleware) => middleware(request, response)),
        ]);
      };
      try {
        const response = await applyRateLimit(req, NextResponse);
        return response;
      } catch (error) {
        return new NextResponse("Too many request", { status: 429 });
      }
    }
    return response;
  };
};
