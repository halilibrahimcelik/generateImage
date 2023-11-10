"use client";
import { createContext, useContext, useMemo, useState } from "react";

const initialState = {
  prompt: "",
  onClick: (query: string) => {},
  generateImage: () => {},
};
export const MainContext = createContext(initialState);

export const useMainContext = () => {
  const context = useContext(MainContext);
  if (context === undefined)
    throw new Error("useMainContext must be used within a MainProvider");
  return context;
};

type Props = {
  children: React.ReactNode;
};
export const MainProvider = ({ children }: Props) => {
  const [prompt, setPrompt] = useState("");

  const onClick = (query: string) => {
    setPrompt(query);
  };
  const generateImage = async () => {
    try {
      await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });
    } catch (error) {
      console.log(error);
      throw new Error("Something went wrong failed to generate image");
    }
  };
  const contextValue = useMemo(
    () => ({ prompt, onClick, generateImage }),
    [prompt]
  );
  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};
