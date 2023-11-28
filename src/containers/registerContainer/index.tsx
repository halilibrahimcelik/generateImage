import React from "react";
import Wrapper from "@/components/wrapper";
import RegisterForm from "@/components/registerForm";

type Props = {};

const RegisterContainer = async (props: Props) => {
  return (
    <Wrapper tag="section" customClass="min-h-[100vh]">
      <RegisterForm />
    </Wrapper>
  );
};

export default RegisterContainer;
