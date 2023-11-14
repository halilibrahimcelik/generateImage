"use client";
import React from "react";

type Props = {};

const RegisterForm = (props: Props) => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("email"), formData.get("password"));

    const response = await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
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
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
