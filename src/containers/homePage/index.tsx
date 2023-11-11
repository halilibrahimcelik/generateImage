"use client";
import ExampleImages from "@/components/exampleImage";
import Form from "@/components/form";
import PredictedImage from "@/components/predictedImage";
import PromptTag from "@/components/prompTag";
import Wrapper from "@/components/wrapper";
import { MainProvider, useMainContext } from "@/hooks/useMain";
import React from "react";
import { ToastContainer } from "react-toastify";

type Props = {};

const HomePageContainer = (props: Props) => {
  const { loading } = useMainContext();
  return (
    <Wrapper tag="section">
      <MainProvider>
        <Form />
        <PromptTag />
        {loading ? <></> : <PredictedImage />}
        <ExampleImages />
        <div className="overlay" />
      </MainProvider>
      <ToastContainer />
    </Wrapper>
  );
};

export default HomePageContainer;
