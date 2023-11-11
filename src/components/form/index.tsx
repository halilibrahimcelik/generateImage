"use client";
import { useMainContext } from "@/hooks/useMain";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

type Props = {};

const Form = (props: Props) => {
  const { onClick, prompt, generateImage, loading } = useMainContext();
  console.log(loading);
  const textRef = React.useRef<HTMLTextAreaElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const value = textRef.current?.value;
    if (value?.trim() === "") return alert("Please enter a query");
    e.preventDefault();
    onClick(value!);
    generateImage();
    toast.promise(generateImage, {
      pending: "Promise is pending",
      success: "Promise resolved 👌",
      error: "Promise rejected 🤯",
    });
  };
  useEffect(() => {
    textRef.current!.value = prompt;
    console.log(prompt);
  }, [prompt]);
  return (
    <div className="w-full rounded-md gradient-box ">
      <form
        onSubmit={handleSubmit}
        className="flex h-auto md:h-[120px]  flex-col md:flex-row  items-center justify-center  gap-2 md:gap-6 "
      >
        <textarea
          className="w-full text h-32 md:h-full bg-transparent py-1 px-3 resize-none  rounded-md  focus:shadow-sky-400   focus:outline-none    focus:shadow-[0_1px_6px_1px_rgba(0,0,0,0.1)]  "
          name=""
          placeholder="Enter your query..."
          id=""
          ref={textRef}
          required
        ></textarea>
        <button className="btn-primary" type="submit">
          Generate
        </button>
      </form>
    </div>
  );
};

export default Form;
