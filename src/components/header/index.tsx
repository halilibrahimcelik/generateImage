import Image from "next/image";
import React from "react";
import Wrapper from "../wrapper";
import Link from "next/link";
import logo from "@/assets/logo-small.png";
import ToggleLink from "./ToggleLink";
import NavLink from "./NavLink";

type Props = {};

function Header({}: Props) {
  return (
    <Wrapper tag="nav" customClass="py-[50px]">
      <ul className="flex justify-between items-center">
        <li>
          <Link
            className="flex gap-1 items-center pacity-100 hover:opacity-70  transition-opacity ease-in duration-200"
            href={"/"}
          >
            <Image
              width={75}
              height={75}
              className="object-cover"
              alt="logo"
              src={logo}
            />
            <h1 className="text-2xl  md:leading-[1.2] md:text-3xl xl:text-4xl font-bold ">
              Generate Image
            </h1>
          </Link>
        </li>
        <li className="flex gap-4 ">
          <NavLink label="About" href="/about" />
          <ToggleLink />
        </li>
      </ul>
      <p className="text mt-10">
        Tell us what is in your mind and we will generature image for you!{" "}
      </p>
    </Wrapper>
  );
}

export default Header;
