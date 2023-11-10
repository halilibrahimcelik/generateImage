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
  const generateImage = () => {
    console.log("hello");
  };
  const contextValue = useMemo(
    () => ({ prompt, onClick, generateImage }),
    [prompt]
  );
  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};
