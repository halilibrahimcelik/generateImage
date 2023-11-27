import React from "react";
import Wrapper from "@/components/wrapper";
import LoginForm from "@/components/loginForm";
type Props = {};

const LoginContainer = (props: Props) => {
  return (
    <Wrapper tag="section">
      <LoginForm />
    </Wrapper>
  );
};

export default LoginContainer;
