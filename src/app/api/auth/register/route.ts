import { NextResponse } from "next/server";
import { z } from "zod";
import { hash } from "bcrypt";

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
      const hassPassword = await hash(password, 10);
      console.log();
    } catch (passwordError) {
      return new Response(
        "Invalid password format. It should be at least 8 characters long",
        { status: 400 }
      );
    }
    console.log({ email, password });
  } catch (error) {
    console.log({ error });
  }

  return NextResponse.json({ message: "success" });
}
