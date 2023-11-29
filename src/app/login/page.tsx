import LoginContainer from "@/containers/loginContainer";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
type Props = {};

const LoginPage = async (props: Props) => {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return <LoginContainer />;
};

export default LoginPage;
