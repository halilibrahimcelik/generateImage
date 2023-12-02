"use client";
import ContactForm from "@/components/contactForm";
import Wrapper from "@/components/wrapper";
import React, { useLayoutEffect } from "react";
import { useEffect, useRef } from "react";
import { Player } from "@lordicon/react";
import Icon from "@/assets/icon.json";
import gsap from "gsap";
type Props = {};

const AboutPageContainer = (props: Props) => {
  const playerRef = useRef<Player>(null);
  useEffect(() => {
    playerRef.current?.playFromBeginning();
  }, []);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".briefing", {
        x: 100,
        opacity: 0,
        duration: 0.3,
        delay: 0.3,
        ease: "sine.in",
      });
      gsap.from(".contact-form", {
        x: -100,
        opacity: 0,
        duration: 0.3,
        delay: 0.3,
        ease: "sine.in",
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <Wrapper tag="section" customClass="h-auto">
      <div className="grid grid-cols-1 gap-10  py-10 lg:grid-cols-2 lg:gap-2 lg:justify-items-end">
        <div className="flex flex-col gap-4 briefing ">
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
        <div className="contact-form w-full flex items-end justify-end">
          <ContactForm />
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutPageContainer;
