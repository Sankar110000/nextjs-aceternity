import { div, h1 } from "framer-motion/client";
import Link from "next/link";
import { Spotlight } from "./ui/spotlight";
import { Button } from "./ui/moving-border";
import { BackgroundGradient } from "./ui/background-gradient";

export default function HeroSection() {
  return (
    <div className="h-screen w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className="mt-20 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Master the art of music
        </h1>
        <p className="mt-5 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">
          Dive into our comprehensive music courses and transform your musical
          journey today. Whether you're a beginner or looking to refine your
          skills, join us to unlock your true potential.
        </p>
      </div>
      <Spotlight fill="#1ca0ba"/>
      <div className="m-4">
        <Link href={"/courses"}>
        <div className="mt-5">
        <Button>
          Explore Courses
        </Button>
        </div>
        </Link>
      </div>
    </div>
  );
}
