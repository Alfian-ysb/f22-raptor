import React from "react";
import SpecImg from "../../assets/img/spec.avif";

const Spec = () => {
  const Specs = [
    {
      left: {
        data: [
          { name: "Top Speed", value: "2.700", unit: "km/h" },
          { name: "Max Weight", value: "83.500", unit: "lb" },
          { name: "Ceiling", value: "50.000", unit: "ft" },
        ],
      },
      right: {
        data: [
          { name: "Mileage", value: "1,850+", unit: "miles" },
          { name: "20 mm ammo", value: "480", unit: "rds" },
          { name: "Afterburner Thrust", value: "35.000", unit: "lb" },
        ],
      },
    },
  ];

  return (
    <div
      id="specs"
      className="relative h-auto flex flex-col justify-center gap-8 md:gap-0 mt-40 scroll-mt-28"
    >
      <div className="w-full">
        <h1 className="text-subtitle md:text-title font-orbitron font-medium tracking-wide text-center">
          Specifications
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 lg:grid-rows-1 w-full items-center gap-0">
        <div className="col-span-1 order-2 md:order-1 md:col-span-2 lg:order-1 lg:col-span-1 flex flex-col items-center lg:items-start justify-center lg:gap-16 text-center lg:text-left px-4 md:px-0">
          {Specs[0].left.data.map((spec, index) => (
            <div key={index} className="mb-12 lg:mb-0">
              <h2 className="text-primary text-title font-orbitron font-medium">
                {spec.value}
                <span className="text-neutral-gray text-sm ml-[.1rem]">{spec.unit}</span>
              </h2>
              <p className="text-secondary text-body">{spec.name}</p>
            </div>
          ))}
        </div>

        <div className="col-span-1 md:col-span-4 lg:col-span-2 md:row-start-1 lg:col-start-2 order-1 mb-16 mt-12 md:mb-0 lg:order-2 md:pt-0 md:px-40 lg:px-10 box-border md:max-h-full flex justify-center items-center w-full">
          <img
            src={SpecImg}
            alt="Specifications"
            className="h-full w-full object-contain mx-auto"
          />
        </div>

        <div className="col-span-1 order-3 md:col-span-2 lg:col-span-1 flex flex-col items-center lg:items-end justify-center text-center lg:gap-16 lg:text-right px-4 md:px-0">
          {Specs[0].right.data.map((spec, index) => (
            <div key={index} className="mb-12 lg:mb-0">
              <h2 className="text-primary text-title font-orbitron font-medium">
                {spec.value}
                <span className="text-neutral-gray text-sm ml-[.1rem]">{spec.unit}</span>
              </h2>
              <p className="text-secondary text-body">{spec.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Spec;
