import React from "react";
import { getServerSession } from "next-auth";
import Link from "next/link";
import SignOut from "./SignOut";
type Props = {};

const AuthSession = async (props: Props) => {
  const session = await getServerSession();

  console.log({ session });
  return (
    <>
      {session ? (
        <SignOut />
      ) : (
        <Link
          className={`font-medium  pacity-100 hover:opacity-70  transition-opacity ease-in duration-200 relative after:content-['']  after:absolute after:w-full after:h-[2px] after:transition-all after:duration-200 after:ease-in     after:left-0 after:right-0 after:top-[24px] after:bg-white hover:after:scale-50`}
          href={"/login"}
        >
          Sign-in
        </Link>
      )}
    </>
  );
};

export default AuthSession;
