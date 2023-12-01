"use client";
import ContactForm from "@/components/contactForm";
import Wrapper from "@/components/wrapper";
import React from "react";
import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";
import Icon from "@/assets/icon.json";
type Props = {};

const AboutPageContainer = (props: Props) => {
  const playerRef = useRef<Player>(null);
  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);
  return (
    <Wrapper tag="section" customClass="h-auto">
      <div className="grid grid-cols-1  py-10 lg:grid-cols-2 gap-2 lg:justify-items-end">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <h2 className="text-2xl">Welcome Back </h2>
            <Player ref={playerRef} icon={Icon} />
          </div>
          <article className="grid gap-2">
            <p className="text">
              Just Use your imagination, and we handle the rest!{" "}
            </p>
            <p className="text">
              You have to register first, then you can freely visualize your
              thoughts! <br />
              You can also download the image you generated.
            </p>
            <p className="text">
              This is my first project using AI learning models with a cloud
              API, so if you have any feedback, please let me know!
            </p>
          </article>
        </div>
        <ContactForm />
      </div>
    </Wrapper>
  );
};

export default AboutPageContainer;
