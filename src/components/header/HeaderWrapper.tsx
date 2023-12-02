"use client";
import React, { useLayoutEffect } from "react";
import { gsap } from "gsap";

type Props = {
  children: React.ReactNode;
};

const HeaderWrapper = ({ children }: Props) => {
  const headerRef = React.useRef(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("header", {
        y: -50,
        opacity: 0,
        duration: 0.3,
        delay: 0.3,
        ease: "power2.in",
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <header ref={headerRef} className="header">
      {children}
    </header>
  );
};

export default HeaderWrapper;
