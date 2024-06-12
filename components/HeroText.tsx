"use client";

import { TypewriterEffectSmooth } from "./ui/TypeWriter";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Unlock",
      className:"text-blue-900 md:text-2xl text-xl italic",
    },
    {
      text: "insights",
      className:"text-blue-900 md:text-2xl text-xl italic",
    },
    {
      text: "from",
      className: "text-blue-900 md:text-2xl text-xl  italic",
    },
    {
      text: "the",
      className: "text-blue-900 md:text-2xl text-xl italic",
    },
    {
      text: "web",
      className: "text-blue-900 md:text-2xl text-xl italic",
    },
    {
      text: "with",
      className: "text-blue-900 md:text-2xl text-xl italic",
    },
    {
      text: "our",
      className: "text-blue-900 md:text-2xl text-xl italic",
    },
    {
      text: "powerful",
      className: "text-blue-900 md:text-2xl text-xl italic",
    },
    {
      text: "web",
      className: "text-teal-400 md:text-2xl text-xl",
    },
    {
      text: "scraper",
      className: "text-teal-400  md:text-2xl text-xl",
    },

  ];
  return (
    <div className="max-w-screen-xl mx-auto">

    <div className=" mx-autofont-bold mb-4">
      <TypewriterEffectSmooth words={words} />
      </div>
      </div>


  );
}