import NextAuth from "next-auth/next";
import { option } from "./option";

const handler = NextAuth(option);
