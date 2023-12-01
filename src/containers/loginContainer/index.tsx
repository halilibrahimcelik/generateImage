import React from "react";
import Wrapper from "@/components/wrapper";
import LoginForm from "@/components/loginForm";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import BgCover from "@/assets/bg-cover.jpg";

type Props = {};

const LoginContainer = (props: Props) => {
  return (
    <Wrapper tag="section" customClass="min-h-[80vh]">
      <LoginForm />
      <div className="flex flex-col gap-4">
        <p>Don&apos;t you have an account? </p>
        <Link className="btn-primary px-6  m-0 py-1 w-fit" href="/register">
          Sign up
        </Link>
      </div>
      <Image
        src={BgCover}
        alt="Picture of the lonely astronaut"
        className="fixed  img-cover top-0 right-0 bottom-0 h-screen w-screen object-cover  z-[-1] lg:w-[1000px]  "
      />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Wrapper>
  );
};

export default LoginContainer;
