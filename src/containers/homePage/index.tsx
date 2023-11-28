"use client";
import ExampleImages from "@/components/exampleImage";
import Form from "@/components/form";
import PredictedImage from "@/components/predictedImage";
import PredictLoading from "@/components/predictedImage/loading";
import PromptTag from "@/components/prompTag";
import Wrapper from "@/components/wrapper";
import { useMainContext } from "@/hooks/useMain";
import React, { useEffect } from "react";
import { PuffLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";

type Props = {};

const HomePageContainer = (props: Props) => {
  const { loading } = useMainContext();

  return (
    <Wrapper tag="section">
      <Form />
      <PromptTag />
      {loading ? (
        <div className="flex flex-col items-center justify-center gap-2">
          <PuffLoader
            size={100}
            cssOverride={{
              animation: "ease-in",
              backgroundColor: "transparent",
            }}
            color="#e3e3e3"
          />
          <PredictLoading />
        </div>
      ) : (
        <PredictedImage />
      )}
      <ExampleImages />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Wrapper>
  );
};

export default HomePageContainer;
