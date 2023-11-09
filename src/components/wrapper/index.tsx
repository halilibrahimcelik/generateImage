import React from "react";

type Props = {
  children: React.ReactNode;
  tag?: string;
};

function Wrapper({ children, tag = "div" }: Props) {
  const Element = tag as keyof JSX.IntrinsicElements;
  return (
    <Element className="container mx-auto px-[10px]  md:px-8">
      {children}
    </Element>
  );
}

export default Wrapper;
