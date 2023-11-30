import React from "react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import SignOutBtn from "./SignOutBtn";
import NavLink from "./NavLink";

//import SignOut from "./SignOut";
type Props = {};

const ToggleLink = async (props: Props) => {
  const session = await getServerSession();

  return (
    <>{session ? <SignOutBtn /> : <NavLink label="Sign-in" href="/login" />}</>
  );
};

export default ToggleLink;
