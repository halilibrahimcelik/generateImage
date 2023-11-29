import RegisterContainer from "@/containers/registerContainer";
import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
type Props = {};

async function RegisterPage({}: Props) {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return <RegisterContainer />;
}

export default RegisterPage;
