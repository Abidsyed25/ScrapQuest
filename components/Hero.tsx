"use client";

import Form from "./Form";
import Snackbar from "./Snackbar";
import { TypewriterEffectSmoothDemo } from "./HeroText";
import HeroTypingEffect from "./HeroTypingEffect";
import Testimonials from "./Testimonials";
import { LampContainer } from "./ui/LampEffect";

export default function Hero() {
  return (
    <>
      <div className="relative h-screen flex flex-col justify-center items-center">
        <LampContainer>
          <div className="text-center w-full max-w-xl">
            {/* Unlock insights from the web with our powerful web scraper */}
            {/* <TypewriterEffectSmoothDemo /> */}
            <HeroTypingEffect />
          </div>
          <div className="md:w-[50rem] w-[20rem] flex flex-col items-center ">
            <Form />
          </div>
        </LampContainer>
      </div>
      <Testimonials/>
    </>
  );
}
