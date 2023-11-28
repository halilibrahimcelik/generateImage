import React from "react";

type Props = {
  children: React.ReactNode;
  tag?: string;
  customClass?: string;
};

function Wrapper({ children, tag = "div", customClass }: Props) {
  const Element = tag as keyof JSX.IntrinsicElements;
  return (
    <Element
      className={`container mx-auto px-[10px]  md:px-8 ${
        customClass ? customClass : ""
      }`}
    >
      {children}
      <div className="overlay" />
    </Element>
  );
}

export default Wrapper;
