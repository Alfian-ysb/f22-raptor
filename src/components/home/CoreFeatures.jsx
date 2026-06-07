import React from "react";
import CoreFeaturesImg1 from "../../assets/img/CoreFeatures1.avif";
import CoreFeaturesImg2 from "../../assets/img/CoreFeatures2.avif";
import CoreFeaturesImg3 from "../../assets/img/CoreFeatures3.avif";
import KeyPoint from "./CoreFeatures/KeyPoint";

const CoreFeatures = () => {
  return (
    <div className="flex items-center flex-col-reverse lg:flex-row justify-between gap-16 mt-40">
      <div className="grid grid-cols-2 grid-rows-4 h-[60vh] lg:h-fit lg:grid-rows-6 gap-4 w-full lg:w-3/5">
        <div className="row-span-4 lg:row-start-2">
          <img
            src={CoreFeaturesImg1}
            alt="Core Feature 1"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="row-span-2 lg:row-span-4">
          <img
            src={CoreFeaturesImg2}
            alt="Core Feature 2"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="row-span-2">
          <img
            src={CoreFeaturesImg3}
            alt="Core Feature 3"
            className="object-cover h-full w-full"
          />
        </div>
      </div>

      <div className="flex flex-col items-center lg:items-start justify-center gap-[10vh] w-full">
        <KeyPoint />
        <div className="w-full lg:w-2/3">
          <p className="text-lg text-center lg:text-left text-neutral-light">
            The motto of the F-22 program that describes its air combat
            capabilities
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;