import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcrypt';
import { sql } from '@vercel/postgres';
import GoogleProvider from 'next-auth/providers/google';

import { cookies } from 'next/headers';
export const option: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 7 * 24 * 60 * 60, // 7 days
  },

  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: 'Credentials',

      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {
        const response = await sql`
          SELECT * FROM users WHERE email=${credentials?.email}
        `;
        const user = response.rows[0];
        const passwordCheck = await compare(
          credentials?.password!,
          user?.password
        );

        if (passwordCheck) {
          return {
            id: user?.id,
            email: user?.email,
          };
        }
        //  console.log({ credentials });

        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user, session }) {
      // Modify the token, user, or session objects
      // console.log({ token, user, session }, "jwt callback");
      //pass user id to jwt token
      if (user) {
        return { ...token, ...user };
      }
      return token;
    },
    async session({ session, token, user, newSession }) {
      // Modify the session object
      session.user = token;
      console.log(session);
      cookies().set({
        name: 'access_token',
        value: 'lee',
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });
      session.user = token;

      // Set the cookie in the response object
      return session;
    },
  },
};
