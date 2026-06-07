import React from "react";
import AboutImg from "../../assets/img/about.avif";

const About = () => {
  return (
    <div id="about" className="relative grid grid-cols-2 h-screen gap-16 py-20">
      <div className="flex flex-col gap-12 my-auto">
        <div className="flex flex-col font-dela-gothic-one">
          <h3 className="text-primary opacity-40 text-title leading-none">
            F22
          </h3>
          <h3 className="text-secondary text-[7.5rem] leading-none tracking-widest font-bold">
            RAPTOR
          </h3>
        </div>
        <div className="flex flex-col gap-4 pl-12">
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
      </div>
      <div className="relative">
        <div className="absolute w-[140%] h-auto inset-0 -translate-x-2/7 top-1/12">
          <img src={AboutImg} alt="About F-22 Raptor" className="" />
        </div>
      </div>
      <div className="absolute bottom-1/6 left-12 -translate-x-1/2 mb-8">
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
  );
};

export default About;
