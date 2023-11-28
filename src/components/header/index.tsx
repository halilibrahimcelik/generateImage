"use client";

import { usePathname } from "next/navigation";

import React from "react";
import Wrapper from "../wrapper";
import Link from "next/link";
type Props = {};

function Header({}: Props) {
  const pathname = usePathname();
  const active = "after:scale-100";
  const inactive = "after:scale-0";
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
            <Link
              className={`font-medium relative after:content-['']  after:absolute after:w-full after:h-[2px] after:transition-all after:duration-200 after:ease-in  ${
                pathname === "/about" ? active : inactive
              }    after:left-0 after:right-0 after:top-[24px] after:bg-white hover:after:scale-50`}
              href={"/about"}
            >
              About
            </Link>
            <Link
              className={`font-medium relative after:content-['']  after:absolute after:w-full after:h-[2px] after:transition-all after:duration-200 after:ease-in  ${
                pathname === "/login" ? active : inactive
              }    after:left-0 after:right-0 after:top-[24px] after:bg-white hover:after:scale-50`}
              href={"/login"}
            >
              Sign-in
            </Link>
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
