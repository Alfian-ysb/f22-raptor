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
    <div id="spec" className="relative h-screen">
      <div className="w-full">
        <h1 className="text-title font-orbitron font-medium tracking-wide text-center">
          Specifications
        </h1>
      </div>
      <div className="grid grid-cols-4 w-full">
        <div className="col-span-1 flex flex-col items-start justify-center gap-[10%]">
          {Specs[0].left.data.map((spec, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-primary text-title font-orbitron font-medium">
                {spec.value}{" "}
                <span className="text-neutral-gray text-sm">{spec.unit}</span>
              </h2>
              <p className="text-secondary text-body">{spec.name}</p>
            </div>
          ))}
        </div>
        <div className="col-span-2 py-8 px-16 box-border">
          <img
            src={SpecImg}
            alt="Specifications"
            className="w-full h-full object-contain aspect-auto"
          />
        </div>
        <div className="col-span-1 flex flex-col items-start justify-center gap-[10%]">
          {Specs[0].right.data.map((spec, index) => (
            <div key={index} className="mb-4">
              <h2 className="text-primary text-title font-orbitron font-medium">
                {spec.value}{" "}
                <span className="text-neutral-gray text-sm">{spec.unit}</span>
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
