"use client";
import React from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { toastConfig } from "@/lib/utils";
import { useRouter } from "next/navigation";
const LoginForm = () => {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    console.log(formData.get("email"), formData.get("password"));
    const response = await signIn("credentials", {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      redirect: false,
    }).then((res) => {
      if (!res?.ok) {
        toast(<p>Invalid Creditenials</p>, {
          type: "error",
          pauseOnHover: true,
          ...toastConfig,
        });
      } else if (res.status === 200) {
        toast(<p>Welcome Back 👋</p>, {
          type: "success",
          pauseOnHover: true,
          ...toastConfig,
        });
        toast.onChange((e) => {
          if (e.status === "removed" && res.status === 200) {
            router.push("/");
            router.refresh();
          }
        });
      }
    });
    console.log({ response });
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 w-[40rem] lg:w-[50rem]"
    >
      <input
        className="text-black px-1 py-2  rounded-md"
        placeholder="Email..."
        type="email"
        name="email"
      />
      <input
        className="text-black  px-1 py-2 rounded-md"
        placeholder="Password..."
        type="password"
        name="password"
      />
      <button type="submit" className="btn-primary px-6 py-1 mx-auto w-fit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
