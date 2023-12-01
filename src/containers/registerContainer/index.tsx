import React from "react";
import Wrapper from "@/components/wrapper";
import RegisterForm from "@/components/registerForm";
import { ToastContainer } from "react-toastify";
import Image from "next/image";
import BgCover from "@/assets/bg-cover.jpg";
type Props = {};

const RegisterContainer = async (props: Props) => {
  return (
    <Wrapper tag="section" customClass="min-h-[100vh]">
      <RegisterForm />
      <Image
        src={BgCover}
        alt="Picture of the lonely astronaut"
        className="fixed  img-cover top-0 right-0 bottom-0 h-screen w-screen object-cover  z-[-1] lg:w-[1000px]  "
      />
      <ToastContainer
        position="top-right"
        autoClose={10000}
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

export default RegisterContainer;
