"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
type Props = {
  children: React.ReactNode;
};

const HeaderWrapper = ({ children }: Props) => {
  const headerRef = React.useRef<HTMLHeadingElement>(null);
  gsap.registerPlugin(ScrollTrigger);

  useLayoutEffect(() => {
    const header = headerRef.current!;
    const backgroundTween = gsap.to(header, {
      backgroundColor: "rgba(49, 48, 48, 0.9821428571428571)",
      width: "100%",
      backgroundImage: `
        linear-gradient(
          180deg,
          rgba(49, 48, 48, 0.9821428571428571) 100%,
          rgba(136, 119, 119, 0) 0%
        )
      `,
      ease: "power2.inOut",
    });
    const ctx = gsap.context(() => {
      gsap.from("header", {
        y: -50,
        opacity: 0,
        duration: 0.3,
        delay: 0.3,
        ease: "power2.in",
      });
    });
    ScrollTrigger.create({
      start: 200,

      onToggle: ({ isActive }) => {
        if (isActive) {
          header.classList.add("header-scrolled");

          backgroundTween.play();
        } else {
          header.classList.remove("header-scrolled");

          backgroundTween.reverse();
        }
      },
    });

    return () => {
      ctx.revert();
      backgroundTween.kill();
    };
  }, []);

  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 200) {
  //       headerRef.current?.classList.add("header-scrolled");
  //     } else {
  //       headerRef.current?.classList.remove("header-scrolled");
  //     }
  //   });
  //   return () => window.removeEventListener("scroll", () => {});
  // }, []);
  return (
    <header ref={headerRef} className="header   ">
      {children}
    </header>
  );
};

export default HeaderWrapper;
