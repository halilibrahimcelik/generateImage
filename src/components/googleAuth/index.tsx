"use client";
import React from "react";
import googleIcon from "@/assets/google.png";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { usePathname } from "next/navigation";
type Props = {};

const GoogleAuthBtn = (props: Props) => {
  const pathname = usePathname();
  const handleGoogleRegister = async () => {
    await signIn("google", { callbackUrl: "/" });
  };
  return (
    <div className="flex flex-col justify-center items-center gap-2 w-full  md:w-[40rem] lg:w-[50rem]">
      <p className="text-center">
        {pathname === "/login"
          ? "or login with Google"
          : "or register with Google"}
      </p>
      <button
        className="hover:scale-105 duration-200 transition-all ease-in  opacity-75 hover:opacity-100 hover:-hue-rotate-15 bg-blend-luminosity "
        onClick={handleGoogleRegister}
      >
        <Image src={googleIcon} width={48} height={48} alt="Google logoa" />
      </button>
    </div>
  );
};

export default GoogleAuthBtn;
