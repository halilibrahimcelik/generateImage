import { NextResponse } from "next/server";
import { z, ZodError } from "zod";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  const emailSchema = z.string().email({ message: "Invalid email format" });
  const passwordSchema = z.string().min(4).max(100);

  try {
    const { email, password } = await request.json();
    //validate email and password

    emailSchema.parse(email);
    passwordSchema.parse(password);
    const hassPassword = await hash(password, 10);

    const response = await sql`
    INSERT INTO users (email, password) VALUES (${email}, ${hassPassword})
    `;
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }

  return NextResponse.json(
    { message: "You have succesfully registered!" },
    { status: 200 }
  );
}
