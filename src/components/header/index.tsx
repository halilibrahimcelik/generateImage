import React from "react";
import Wrapper from "../wrapper";

type Props = {};

function Header({}: Props) {
  return (
    <header>
      <Wrapper tag="nav" customClass="py-[50px]">
        <h1 className="text-3xl  md:leading-[1.2] md:text-5xl xl:text-6xl font-bold">
          {" "}
          Image your vision <br />
          we will make it real
        </h1>
        <p className="text mt-10">
          Tell us what is in your mind and we will generature image for you!{" "}
        </p>
      </Wrapper>
    </header>
  );
}

export default Header;
