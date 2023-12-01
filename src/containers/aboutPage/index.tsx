import Wrapper from "@/components/wrapper";
import React from "react";

type Props = {};

const AboutPageContainer = (props: Props) => {
  return (
    <Wrapper tag="section" customClass="min-h-[80vh]">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl">Welcome Back </h2>
        <article className="grid gap-2">
          <p className="text">
            Just Use your imagination, and we will generate image for you!
          </p>
          <p className="text">
            You have to register first, then you can freely visualize your
            thoughts! <br />
            You can also download the image you generated.
          </p>
          <p className="text">
            This is my first project using AI learning models with a cloud API,
            so if you have any feedback, please let me know!
          </p>
        </article>
      </div>
    </Wrapper>
  );
};

export default AboutPageContainer;
