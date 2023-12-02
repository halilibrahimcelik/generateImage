"use client";
import { signOut } from "next-auth/react";

type Props = {};

const SignOutBtn = (props: Props) => {
  const handleSignOut = () => {
    signOut();
  };
  return (
    <button
      className={`font-medium  pacity-100 hover:opacity-70  transition-opacity ease-in duration-200 relative after:content-['']  after:absolute after:w-full after:h-[2px] after:transition-all after:duration-200 after:ease-in     after:left-0 after:right-0 after:scale-0 after:top-[24px] after:bg-white hover:after:scale-50`}
      onClick={handleSignOut}
    >
      Sign-out
    </button>
  );
};

export default SignOutBtn;
