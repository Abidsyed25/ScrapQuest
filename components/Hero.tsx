"use client";

import Form from "./Form";
import Snackbar from "./Snackbar";
import { TypewriterEffectSmoothDemo } from "./HeroText";
import { LampContainer } from "./ui/LampEffect";




export default function Hero() {
  return (
    <>
      <div className="relative h-screen flex flex-col justify-center items-center">
      <LampContainer>
        <div className="text-center w-full max-w-3xl">
          {/* Unlock insights from the web with our powerful web scraper */}
          <TypewriterEffectSmoothDemo />
          <Form />
        </div>
        </LampContainer>
      </div>

     
    </>
  );
}
