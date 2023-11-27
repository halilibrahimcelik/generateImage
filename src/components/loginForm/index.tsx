"use client";
import React from "react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("email"), formData.get("password"));
    const response = await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
    });
    console.log({ response });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 w-[40rem] lg:w-[50rem]"
    >
      <input
        className="text-black p-1 rounded-md"
        placeholder="Email..."
        type="email"
        name="email"
      />
      <input
        className="text-black p-1 rounded-md"
        placeholder="Password..."
        type="password"
        name="password"
      />
      <button type="submit" className="btn-primary p-1 mx-auto w-fit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
