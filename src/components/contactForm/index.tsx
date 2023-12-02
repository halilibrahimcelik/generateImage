"use client";
import React from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { toastConfig } from "@/lib/utils";
import { ZodError, z } from "zod";
type Props = {};

const ContactForm = (props: Props) => {
  const emailSchema = z
    .string()
    .email({ message: "Please enter a valid email address" });
  const nameSchema = z
    .string()
    .min(3, { message: "Please enter a valid name with min 3 characters" });
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("user_email") as string;
    const name = formData.get("user_name") as string;

    try {
      emailSchema.parse(email);
      nameSchema.parse(name);
    } catch (error: any) {
      toast(<p>{error?.errors[0]?.message}</p>, {
        ...toastConfig,
        type: "error",
      });
      return;
    }
    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_GMAIL_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_GMAIL_TEMPLATE_ID}`,
        e.currentTarget,
        `${process.env.NEXT_PUBLIC_GMAIL_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === "OK") {
            toast("Your message has been sent successfully. Thank you!", {
              type: "success",
              ...toastConfig,
            });
          }
        },
        (error) => {
          console.log(error.text);
          toast("There has been an error occured,please try again ", {
            type: "error",
            ...toastConfig,
          });
        }
      );
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col mx-auto w-full md:w-[80%]  lg:m-0  gradient-box "
    >
      <input
        className="input-field "
        type="text"
        name="user_name"
        placeholder="Name"
        required
      />
      <input
        className="input-field"
        type="email"
        name="user_email"
        required
        placeholder="Email"
      />
      <textarea
        className="input-field h-36"
        name="message"
        placeholder="Message"
        required
      />
      <button className="btn-primary w-fit mx-auto py-3 " type="submit">
        Send
      </button>
    </form>
  );
};

export default ContactForm;
