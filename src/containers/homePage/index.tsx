import Form from "@/components/form";
import Wrapper from "@/components/wrapper";
import React from "react";

type Props = {};

const HomePageContainer = (props: Props) => {
  return (
    <Wrapper tag="section">
      <Form />
      <div className="overlay" />
    </Wrapper>
  );
};

export default HomePageContainer;
