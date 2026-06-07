import React from "react";

const KeyPoint = () => {
  return (
    <div className="w-full uppercase flex flex-col items-center lg:items-start">
      <div className="flex items-center gap-4">
        <div className="w-full max-w-[216px] h-auto m-[0_auto]">
          <svg
          className="lg:block hidden"
            width="100%"
            height="100%"
            viewBox="0 0 216 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M0.00708008 2.5L154.576 2.4999"
              stroke="#4ADAB8"
              stroke-width="5"
            />
            <path
              d="M169.438 2.5L216.007 2.5"
              stroke="#4ADAB8"
              stroke-width="5"
            />
          </svg>
        </div>

        <p className="text-7xl font-bebas-neue leading-none text-center text-neutral-light whitespace-nowrap">
          The first view
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-full max-w-[351px] h-auto m-[0_auto]">
          <svg
          className="lg:block hidden"
            width="100%"
            height="100%"
            viewBox="0 0 351 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M0 2.5H54.7941" stroke="#4ADAB8" stroke-width="5" />
            <path
              d="M76 2.96069L350.985 2.96072"
              stroke="#4ADAB8"
              stroke-width="5"
            />
          </svg>
        </div>

        <p className="text-7xl font-bebas-neue leading-none text-center text-neutral-light whitespace-nowrap">
          The first kill
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-full max-w-[144px] h-auto m-[0_auto]">
          <svg
          className="lg:block hidden"
            width="100%"
            height="100%"
            viewBox="0 0 144 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            <path d="M0 2.5H23" stroke="#4ADAB8" stroke-width="5" />
            <path
              d="M35 2.96069L144 2.96069"
              stroke="#4ADAB8"
              stroke-width="5"
            />
          </svg>
        </div>

        <p className="text-7xl font-bebas-neue leading-none text-center text-neutral-light whitespace-nowrap">
          The first kill
        </p>
      </div>
    </div>
  );
};

export default KeyPoint;
