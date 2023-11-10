import Form from "@/components/form";
import PromptTag from "@/components/prompTag";
import Wrapper from "@/components/wrapper";
import React from "react";

type Props = {};

const HomePageContainer = (props: Props) => {
  return (
    <Wrapper tag="section">
      <Form />
      <PromptTag />
      <div className="overlay" />
    </Wrapper>
  );
};

export default HomePageContainer;
