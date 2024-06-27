"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../components/ui/InfiniteMovingCards";

const testimonials = [
  {
    quote:
      "ScrapQuest has revolutionized the way we handle data extraction. The platform is incredibly user-friendly and saves us hours of manual scraping. We can now focus on analyzing the data instead of collecting it. Highly recommended for anyone in need of efficient web scraping solutions!",
    name: "John D",
    title: "Data Analyst",
  },
  {
    quote:
      "Running a small business means wearing many hats, and ScrapQuest has taken a significant load off my shoulders. The intuitive interface and powerful scraping capabilities allow me to gather market insights effortlessly. It’s like having an extra team member dedicated to data collection!",
    name: "Emily R",
    title: " Research Scientist",
  },
  {
    quote:
      "Integrating web data into our applications used to be a daunting task, but ScrapQuest made it incredibly simple. The platform’s robust API and straightforward documentation helped us get up and running in no time. It’s an indispensable tool for any developer working with web data.",
    name: "Sophia L.",
    title: "Software Developer",
  },
  {
    quote:
      "ScrapQuest is the best web scraping tool I’ve ever used. It’s efficient, reliable, and the customer support is top-notch. We can now collect data from multiple sources quickly and accurately, which has significantly improved our market analysis process. I can’t imagine going back to our old methods!",
    name: "David M",
    title: "Market Researcher",
  },
];


function Testimonials() {
  return (
    <>
      <div className="h-[40rem] bg-slate-950 rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden -mt-80">
    <h1 className="text-3xl -mt-16">TESTIMONIALS</h1>
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </>
  );
}

export default Testimonials;
