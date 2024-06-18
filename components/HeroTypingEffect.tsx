"use client";
import Typewriter from "typewriter-effect";

const HeroTypingEffect = () => {
  return (
    <div className="text-lg md:text-3xl font-bold mt-6 mb-0 lg:mt-16 lg:mb-8 ">
      <div className="text-blue-900">
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Unlock insights from the web")
              .pauseFor(2500)
              .start()
              .callFunction(() => {
                typewriter.stop();
              });
          }}
          options={{
            delay: 20,
          }}
        />
      </div>
      <div className="text-blue-900 lg:text-cyan-400 ">
        {" "}
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .pauseFor(2000)
              .typeString("with our powerful web scraper")

              .start()
              .callFunction(() => {
                typewriter.stop();
              });
          }}
          options={{
            delay: 20,
          }}
        />
      </div>
    </div>
  );
};

export default HeroTypingEffect;
