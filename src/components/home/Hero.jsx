import React, { useState, useEffect } from "react";
import HeroImg from "../../assets/img/hero.avif";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const animatedClass = `transition-all duration-1000 ease-out ${
    isVisible
      ? "opacity-100 translate-x-0 tracking-normal"
      : "opacity-0 -translate-x-16 tracking-[-0.4em]"
  }`;

  const animatedClassReverse = `transition-all duration-1300 ease-out delay-300 ${
    isVisible
      ? "opacity-100 translate-x-0 tracking-normal"
      : "opacity-0 translate-x-32 tracking-[-0.4em]"
  }`;

  const animatedClass2 = `transition-all duration-2000 ease-out delay-500 ${
    isVisible ? "opacity-100 scale-100" : "opacity-0 scale-115"
  }`;
  return (
    <div className="relative h-screen flex items-center justify-center ">
      <div
        className={`absolute -z-10 w-full max-w-246.5 h-auto m-[0_auto] transform duration-2000 delay-800 ease-in ${
          isVisible
            ? "opacity-100 scale-100 top-0 left-1/2 -translate-x-1/2"
            : "opacity-30 scale-90 -top-200 -left-30"
        }`}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 986 868"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <path
            d="M0 -28.3227L287.574 -130L623.405 766.323L335.832 868L0 -28.3227Z"
            fill="url(#paint0_linear_184_177)"
          />
          <path
            d="M362.594 -28.3227L650.168 -130L986 766.323L698.426 868L362.594 -28.3227Z"
            fill="url(#paint1_linear_184_177)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_184_177"
              x1="506.381"
              y1="-79.1613"
              x2="825.396"
              y2="823.107"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.519231" stopColor="#474141" stopOpacity="0.13" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_184_177"
              x1="506.381"
              y1="-79.1613"
              x2="825.396"
              y2="823.107"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.519231" stopColor="#474141" stopOpacity="0.13" />
              <stop offset="1" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div
        className={`absolute -z-10 h-screen flex flex-col items-center justify-center gap-14 lg:gap-0 lg:justify-between py-32`}
      >
        <div className={animatedClass}>
          <p className="bg-primary text-transparent bg-clip-text leading-none opacity-6 text-[10vw] font-bold font-mars">
            RAPTOR
          </p>
        </div>
        <div className={animatedClass2}>
          <p className="text-neutral-light leading-none text-[10vw] font-bold font-mars">
            RAPTOR
          </p>
        </div>
        <div className={animatedClassReverse}>
          <p className="bg-primary text-transparent bg-clip-text leading-none opacity-6 text-[10vw] font-bold font-mars">
            RAPTOR
          </p>
        </div>
      </div>
      <div className={`px-[20%]`}>
        <img
          src={HeroImg}
          alt="f22 raptor"
          className={`w-full aspect-auto object-contain transition-all duration-1400 ease-out ${
            isVisible
              ? "opacity-100 scale-130 lg:scale-100 translate-y-0 translate-x-0"
              : "opacity-0 scale-10 rotate-25 -translate-y-90 translate-x-20"
          }`}
        />
      </div>
      <div className={`absolute z-10 ${animatedClass2}`}>
        <p className="text-transparent [-webkit-text-stroke:2px_#f1f1f1] lg:[-webkit-text-stroke:4px_#f1f1f1] leading-none text-[10vw] font-bold font-mars">
          RAPTOR
        </p>
      </div>
    </div>
  );
};

export default Hero;
