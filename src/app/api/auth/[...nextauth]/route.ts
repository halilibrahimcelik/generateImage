import NextAuth from "next-auth/next";
import { option } from "./option";
import type { NextApiRequest, NextApiResponse } from "next";

const handler = NextAuth(option);

export { handler as GET, handler as POST };
