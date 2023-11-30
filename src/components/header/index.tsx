import Image from "next/image";
import React from "react";
import Wrapper from "../wrapper";
import Link from "next/link";
import logo from "@/assets/logo-small.png";
import ToggleLink from "./ToggleLink";
import { SessionProvider } from "next-auth/react";
// import { usePathname } from "next/navigation";
type Props = {};

function Header({}: Props) {
  const pathname = true;
  const active = "after:scale-100";
  const inactive = "after:scale-0";
  return (
    <header>
      <Wrapper tag="nav" customClass="py-[50px]">
        <ul className="flex justify-between items-center">
          <li>
            {/* <h1 className="text-3xl  md:leading-[1.2] md:text-5xl xl:text-6xl font-bold">
              {" "}
              Image your vision <br />
              we will make it real
            </h1> */}

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
            <Link
              className={`font-medium relative after:content-[''] opacity-100 hover:opacity-70  transition-opacity ease-in duration-200  after:absolute after:w-full after:h-[2px] after:transition-all after:duration-200 after:ease-in  ${
                pathname ? active : inactive
              }    after:left-0 after:right-0 after:top-[24px] after:bg-white hover:after:scale-50`}
              href={"/about"}
            >
              About
            </Link>
            <ToggleLink />
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
