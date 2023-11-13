import Wrapper from "@/components/wrapper";
import React from "react";

type Props = {};

function RegisterPage({}: Props) {
  return (
    <Wrapper tag="section">
      <form className="flex flex-col gap-2 w-[40rem] lg:w-[50rem]">
        <input
          className="text-black p-1 rounded-md"
          placeholder="Email..."
          type="email"
        />
        <input
          className="text-black p-1 rounded-md"
          placeholder="Password..."
          type="password"
        />
        <button type="submit" className="btn-primary p-1 mx-auto w-fit">
          Register
        </button>
      </form>
    </Wrapper>
  );
}

export default RegisterPage;