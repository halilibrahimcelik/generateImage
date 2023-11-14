"use client";
import { useMainContext } from "@/hooks/useMain";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

type Props = {};

const Form = (props: Props) => {
  const { onClick, prompt, generateImage, setLoading, loading } =
    useMainContext();
  const textRef = React.useRef<HTMLTextAreaElement>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const value = textRef.current?.value;
    console.log(value);
    if (value?.trim() === "") return toast.warning("Please enter a query");
    e.preventDefault();
    onClick(value!);

    toast.promise(generateImage(value!), {
      pending: "Your image is being generated 🤔",
      success: "Yay, image has been rendered 🥳",
      error: "Unfortunately, there has been an eror, please try again 😢",
    });
  };
  useEffect(() => {
    textRef.current!.value = prompt;
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
        <button
          className={`btn-primary ${
            loading
              ? "pointer-events-none  grayscale opacity-50"
              : "opacity-100 grayscale-0"
          }`}
          type="submit"
          disabled={loading}
        >
          Generate
        </button>
      </form>
    </div>
  );
};

export default Form;
