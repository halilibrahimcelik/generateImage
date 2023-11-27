"use client";

import { usePathname } from "next/navigation";

import React from "react";
import Wrapper from "../wrapper";
import Link from "next/link";
type Props = {};

function Header({}: Props) {
  const pathname = usePathname();

  return (
    <header>
      <Wrapper tag="nav" customClass="py-[50px]">
        <ul className="flex justify-between">
          <li>
            <h1 className="text-3xl  md:leading-[1.2] md:text-5xl xl:text-6xl font-bold">
              {" "}
              Image your vision <br />
              we will make it real
            </h1>
          </li>
          <li className="flex gap-4">
            <Link className="font-medium" href={"/about"}>
              About
            </Link>
            <Link href={"/sign-in"}>Sign-in</Link>
          </li>
        </ul>
        <p className="text mt-10">
          Tell us what is in your mind and we will generature image for you!{" "}
        </p>
      </Wrapper>
    </header>
  );
}

export default Header;
