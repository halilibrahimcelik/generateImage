"use client";
import { createContext, useContext, useMemo, useState } from "react";
import { toast } from "react-toastify";

const initialState = {
  prompt: "",
  onClick: (query: string) => {},
  error: "",
  generateImage: async () => {},
  prediction: {
    output: [],
  },
  loading: false,
};
export const MainContext = createContext(initialState);
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

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
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(initialState.loading);
  const [prediction, setPrediction] = useState(initialState.prediction);

  const onClick = (query: string) => {
    setPrompt(query);
  };
  const generateImage = async () => {
    try {
      const response = await fetch("/api/predictions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt,
        }),
      });
      let prediction = await response.json();
      setLoading(true);
      if (response.status !== 201) {
        setError(prediction.detail);
      }

      while (
        prediction.status !== "succeeded" &&
        prediction.status !== "failed"
      ) {
        await sleep(1000);
        const response = await fetch("/api/predictions/" + prediction.id);
        prediction = await response.json();
        if (response.status !== 200) {
          setError(prediction.detail);
          return;
        }
        console.log({ prediction });
        if (prediction.status === "succeeded") {
          setLoading(false);
          setPrediction(prediction);
        }
      }
    } catch (error) {
      toast.error("Something went wrong, failed to generate image", {
        theme: "dark",
      });
    }
  };
  const contextValue = useMemo(
    () => ({ prompt, onClick, generateImage, error, prediction, loading }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [prompt, error, prediction]
  );
  return (
    <MainContext.Provider value={contextValue}>{children}</MainContext.Provider>
  );
};
