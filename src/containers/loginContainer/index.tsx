import React from "react";
import Wrapper from "@/components/wrapper";
import LoginForm from "@/components/loginForm";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
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
