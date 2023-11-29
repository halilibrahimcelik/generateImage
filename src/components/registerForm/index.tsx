"use client";
import React from "react";
import { ZodError } from "zod";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { toastConfig } from "@/lib/utils";
type Props = {};

const RegisterForm = (props: Props) => {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("email"), formData.get("password"));
    await fetch("/api/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    }).then(async (res) => {
      if (!res.ok) {
        return res.json().then((data: ZodError) => {
          console.log(data.issues[0].message);
          toast(data.issues[0].message, { ...toastConfig, type: "error" });
        });
      } else {
        return res.json().then((data) => {
          console.log(data);
          toast(
            <div className="w-full">
              <p className="font-xl">{data.message}</p>
              <p>Redirecting to home page</p>
            </div>,
            { ...toastConfig, type: "success" }
          );

          if (res.status === 200) {
            toast.onChange((e) => {
              e.status === "removed" && router.push("/");
            });
          }
        });
      }
    });
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
        required
      />
      <input
        className="text-black p-1 rounded-md"
        placeholder="Password..."
        type="password"
        name="password"
        required
        min={4}
        max={100}
      />
      <button type="submit" className="btn-primary p-1 mx-auto w-fit">
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
