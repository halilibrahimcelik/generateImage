import { NextResponse } from "next/server";
import rateLimit from "express-rate-limit";
import slowDown from "express-slow-down";

const applyMiddleware = (middleware: any) => (request: any, response: any) =>
  new Promise((resolve, reject) => {
    middleware(request, response, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
const getIP = (request: any) => {
  return (
    request.headers["x-forwarded-for"] ||
    request.headers["x-real-ip"] ||
    request.connection.remoteAddress
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

export async function middleware(request: any) {
  try {
    await applyRateLimit(request, NextResponse);
  } catch (error) {
    return new NextResponse("Too many request", { status: 429 });
  }
}

export const config = {
  matcher: "/apis/(.*)",
};
