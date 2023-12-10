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

  // useLayoutEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from("header", {
  //       y: -50,
  //       opacity: 0,
  //       duration: 0.3,
  //       delay: 0.3,
  //       ease: "power2.in",
  //     });
  //   });

  //   return () => {
  //     ctx.revert();
  //   };
  // }, []);

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
    <header ref={headerRef} className={`header transition-background`}>
      {children}
    </header>
  );
};

export default HeaderWrapper;
