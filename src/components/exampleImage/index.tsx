"use client";
import React from "react";
import Image from "next/image";
import example1 from "@/assets/example-1.png";
import example2 from "@/assets/example-2.png";
import example3 from "@/assets/example-3.png";
import example4 from "@/assets/example-4.png";
import example5 from "@/assets/example-5.png";
import example6 from "@/assets/example-6.png";

export const EXAMPLES = [
  {
    id: 4,
    image: example4,
    prompt:
      "modern apple watches with colorful hd displays in a surrealist style",
  },
  {
    id: 1,
    image: example1,
    prompt: "multicolor hyperspace",
  },
  {
    id: 6,
    image: example6,
    prompt: "a gentleman otter in a 19th century portrait",
  },
  {
    id: 5,
    image: example5,
    prompt:
      "Beautiful digital matte pastel paint sunflowers poppies chillwave greg rutkowski artstation",
  },

  {
    id: 2,
    image: example2,
    prompt: "phase shift into an era of human+AI art collab",
  },
  {
    id: 3,
    image: example3,
    prompt: "eye",
  },
];

type Props = {
  onClick?: (query: string) => void;
};

function ExampleImages({ onClick }: Props) {
  return (
    <ul className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {EXAMPLES.map((example) => {
        return (
          <li
            className="relative h-[400px] group  flex flex-col justify-end  image-card"
            key={example.id}
          >
            <Image
              src={example.image}
              className="object-cover w-full h-full rounded-md z-[-1]"
              fill
              alt={example.prompt}
            />
            <h4 className="p-4 relative z-10">{example.prompt} </h4>
            <button
              onClick={() => onClick && onClick(example.prompt)}
              className="btn-copy mx-4 mb-2  px-2 rounded-md w-fit bg-[rgba(0,0,0,0.3)]"
            >
              Copy
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default ExampleImages;
