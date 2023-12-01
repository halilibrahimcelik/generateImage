"use client";
import React from "react";

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <form className="flex flex-col mx-auto w-full md:w-[80%] lg:w-[40rem] gradient-box ">
      <input
        className="input-field "
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        className="input-field"
        type="email"
        name="email"
        placeholder="Email"
      />
      <textarea
        className="input-field h-36"
        name="message"
        placeholder="Message"
      />
      <button className="btn-primary w-fit mx-auto py-3 " type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
