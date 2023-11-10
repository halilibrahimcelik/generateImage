import ExampleImages from "@/components/exampleImage";
import Form from "@/components/form";
import PromptTag from "@/components/prompTag";
import Wrapper from "@/components/wrapper";
import { MainProvider } from "@/hooks/useMain";
import React from "react";

type Props = {};

const HomePageContainer = (props: Props) => {
  return (
    <Wrapper tag="section">
      <MainProvider>
        <Form />
        <PromptTag />
        <ExampleImages />
        <div className="overlay" />
      </MainProvider>
    </Wrapper>
  );
};

export default HomePageContainer;
