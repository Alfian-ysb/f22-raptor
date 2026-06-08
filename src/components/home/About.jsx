import React from "react";
import AboutImg from "../../assets/img/about.avif";

const About = () => {
  return (
    <div id="about" className="relative grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-screen gap-16 py-20 overflow-hidden  scroll-mt-28 mt-32">
      
      <div className="flex flex-col gap-12 my-auto order-2 lg:order-1">
        <div className="flex flex-col font-dela-gothic-one text-center lg:text-left lg:mt-8">
          <h3 className="text-primary opacity-40 text-title leading-none">
            F22
          </h3>
          <h3 className="text-secondary text-5xl sm:text-7xl md:text-8xl lg:text-[7.2vw] leading-none tracking-widest font-bold">
            RAPTOR
          </h3>
        </div>
        
        <div className="flex flex-col gap-4 px-4 lg:px-0 lg:pl-12 text-center lg:text-left">
          <h1 className="text-primary text-subtitle font-medium font-orbitron">
            A Legendary Fighter Born of Fire
          </h1>
          <p className="text-gray-300 text-body">
            The F-22 Raptor is a fifth-generation stealth fighter developed and
            manufactured by Lockheed Martin for the United States Air Force
            (USAF). It is known for its stealth capabilities, supercruise, agile
            maneuverability, and integrated avionics, as well as its extremely
            high combat power.
          </p>
        </div>
        <div className="hidden lg:block mb-8">
        <svg
          width="102"
          height="2"
          viewBox="0 0 102 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1H71.5M80 1H100.5"
            stroke="#4ADAB8"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      </div>

      <div className="relative order-1 lg:order-2 flex justify-center lg:block">
        <div className="relative lg:absolute w-full max-w-[500px] lg:max-w-none lg:w-[140%] h-auto inset-0 lg:-translate-x-2/7 lg:top-[1%]">
          <img src={AboutImg} alt="About F-22 Raptor" className="w-full h-auto object-contain" />
        </div>
      </div>

      
    </div>
  );
};

export default About;