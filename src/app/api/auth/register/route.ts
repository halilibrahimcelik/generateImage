import { NextResponse } from "next/server";
import { z } from "zod";
import { hash } from "bcrypt";
import { sql } from "@vercel/postgres";

export async function POST(request: Request) {
  const emailSchema = z.string().email({ message: "Invalid email format" });
  const passwordSchema = z.string().min(4).max(100);
  try {
    const { email, password } = await request.json();
    //validate email and password
    try {
      emailSchema.parse(email);
    } catch (emailError) {
      return new Response("Invalid email format", { status: 400 });
    }

    try {
      passwordSchema.parse(password);
      console.log();
    } catch (passwordError) {
      return new Response(
        "Invalid password format. It should be at least 8 characters long",
        { status: 400 }
      );
    }
    console.log({ email, password });
    const hassPassword = await hash(password, 10);

    const response = await sql`
    INSERT INTO users (email, password) VALUES (${email}, ${hassPassword})
    `;
  } catch (error) {
    console.log({ error });
  }

  return NextResponse.json({ message: "success" });
}
