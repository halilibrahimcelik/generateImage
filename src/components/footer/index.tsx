import React from "react";
import Wrapper from "../wrapper";
import GithubSvg from "@/assets/github.svg";
import LinkedinSvg from "@/assets/linkedin.svg";
import Link from "next/link";
type Props = {};

function Footer({}: Props) {
  return (
    <footer className="py-10">
      <Wrapper
        tag="ul"
        customClass="flex justify-between items-center gap-2 flex-wrap"
      >
        <li className="flex gap-2">
          <Link
            className="opacity-effect"
            href={"https://github.com/halilibrahimcelik"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubSvg />
          </Link>
          <Link
            className="opacity-effect"
            href={"https://www.linkedin.com/in/halil-ibrahim-celik/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <LinkedinSvg />
          </Link>
        </li>

        <li>
          <p className="font-light text-[14px]">
            developed by{" "}
            <Link
              className="underline-offset-2 underline hover:t transition-all"
              href="mailto:hibrahim.celik@yahoo.com"
            >
              Halil İbrahim Çelik
            </Link>
            <br />
            and used Next.js.
          </p>
        </li>
      </Wrapper>
    </footer>
  );
}

export default Footer;
