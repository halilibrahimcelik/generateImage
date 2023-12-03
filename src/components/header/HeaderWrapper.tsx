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

    const ctx = gsap.context(() => {
      gsap.from("header", {
        y: -50,
        opacity: 0,
        duration: 0.3,
        delay: 0.3,
        ease: "power2.in",
      });
    });
    const timeline = ScrollTrigger.create({
      start: 250,

      onToggle: ({ isActive }) => {
        if (isActive) {
          header.classList.add("header-scrolled");
          gsap.to(header, {
            backgroundColor: "rgba(49, 48, 48, 0.9821428571428571)",
            width: "100%",
            backgroundImage: `
            linear-gradient(180deg, rgba(10,8,34,1) 0%, rgba(150,156,157,0) 100%)
            `,
            ease: "power2.inOut",
            filter: "drop-shadow(3px 4px 6px rgba(0, 0, 0, 0.25))",
          });
          //    backgroundTween.play();
        } else {
          header.classList.remove("header-scrolled");
          gsap.to(header, {
            backgroundColor: "transparent",
            width: "100%",
            backgroundImage: "none",
            ease: "power2.inOut",
            filter: "none",
          });
          // backgroundTween.reverse();
        }
      },
    });

    return () => {
      ctx.revert();
      timeline.kill();
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
