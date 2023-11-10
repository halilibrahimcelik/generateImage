"use client";
import { useMainContext } from "@/hooks/useMain";
import React from "react";

const SUGGESTIONS = [
  {
    id: 1,
    title:
      "A rainbow-colored butterfly flying across a field of flowers during a sunset",
  },
  {
    id: 4,
    title: "earth reviving after human extinction",
  },
  {
    id: 2,
    title:
      "ice cream sundae, delicious, glistening, cherries, marshmallows, highly detailed, octane render",
  },
  {
    id: 3,
    title:
      "glass of water, fishes, photo realistic, fine details, unreal engine",
  },
  {
    id: 6,
    title: "photo of an extremely cute alien fish",
  },
  {
    id: 5,
    title:
      "ice cream sundae, delicious, glistening, cherries, marshmallows, highly detailed, octane render",
  },
  {
    id: 8,
    title: "2 medieval warriors",
  },
];
const PromptTag = () => {
  const { onClick } = useMainContext();
  const handleClick = (query: string) => {
    onClick(query);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <ul className="mt-10 flex flex-col xl:grid   xl:grid-cols-2   gap-2">
      {SUGGESTIONS.map((suggestion) => {
        return (
          <li
            className="bg-[rgba(0,0,0,0.5)]  xl:w-full  xl:flex xl:items-center inline-block group w-fit px-4 py-1 rounded-md "
            key={suggestion.id}
          >
            <button
              onClick={() => handleClick(suggestion.title)}
              className="btn-copy"
            >
              {suggestion.title}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default PromptTag;
