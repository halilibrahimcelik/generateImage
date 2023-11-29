import React from "react";
import Wrapper from "@/components/wrapper";
import RegisterForm from "@/components/registerForm";
import { ToastContainer } from "react-toastify";

type Props = {};

const RegisterContainer = async (props: Props) => {
  return (
    <Wrapper tag="section" customClass="min-h-[100vh]">
      <RegisterForm />

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
