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
      <>
      <div className="relative h-screen flex flex-col justify-center items-center max-sm:px-2 ">
        <LampContainer>
          <div className="text-center w-full max-w-xl max-lg:mb-[-18px]">
            {/* Unlock insights from the web with our powerful web scraper */}
            {/* <TypewriterEffectSmoothDemo /> */}
            <HeroTypingEffect />
          </div>
          <div className="w-full max-w-xl max-lg:mt-12 max-md:mt-8 max-sm:mt-6">
            <Form />
          </div>
        </LampContainer>
      </div>
      <Testimonials />
    </>
    </>
  );
}
