"use client";
import ExampleImages from "@/components/exampleImage";
import Form from "@/components/form";
import PredictedImage from "@/components/predictedImage";
import PromptTag from "@/components/prompTag";
import Wrapper from "@/components/wrapper";
import { MainProvider, useMainContext } from "@/hooks/useMain";
import React from "react";
import { PuffLoader } from "react-spinners";
import { ToastContainer } from "react-toastify";

type Props = {};

const HomePageContainer = (props: Props) => {
  const { loading } = useMainContext();
  console.log(loading);
  return (
    <Wrapper tag="section">
      <MainProvider>
        <Form />
        <PromptTag />
        {!loading ? (
          <div className="flex items-center justify-center">
            <PuffLoader
              size={100}
              cssOverride={{
                animation: "ease-in",
                backgroundColor: "transparent",
              }}
              color="#e3e3e3"
            />
          </div>
        ) : (
          <PredictedImage />
        )}
        <ExampleImages />
        <div className="overlay" />
      </MainProvider>
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
