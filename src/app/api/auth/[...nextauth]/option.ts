import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";
import { sql } from "@vercel/postgres";
export const option: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. 'Sign in with...')
      name: "Credentials",
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
        console.log({ user, passwordCheck });
        if (passwordCheck) {
          return {
            id: user?.id,
            email: user?.email,
          };
        }
        console.log({ credentials });

        return null;
      },
    }),
  ],
};
