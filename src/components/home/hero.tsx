import React from "react";
import RollInText from "../animation/roll-in-text";
import FadeIn from "../animation/fade-in";
import { Link } from "@/navigation";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="relative grid min-h-screen place-items-center text-center"
    >
      <div className="flex flex-col gap-6 md:gap-8">
        <h1 className="sr-only">Your place to Learn Japanese Grammar</h1>
        <RollInText
          text={["Your place to learn", "Japanese Grammar"]}
          el="h1"
          className="text-clamp-xl font-bold leading-none tracking-tight text-display"
          staggerChildren={0.005}
        />
        <FadeIn className="grid place-items-center" delay={0.8}>
          <p className="text-md max-w-sm text-center text-body md:text-xl">
            You came to the right place. We make learning the Japanese language
            fun and easy
          </p>
        </FadeIn>
        <FadeIn delay={1.2}>
          <div>
            <Link href="/grammar">
              <Button className="uppercase text-white/90">
                Explore grammar
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
