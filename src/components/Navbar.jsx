import React, { useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItemsClasses =
    "text-start relative py-1 before:absolute before:w-full before:bottom-0 before:scale-x-0 before:transition-transform before:h-[3px] before:content-[''] before:origin-left before:left-0 before:duration-200 hover:before:scale-x-100 before:bg-primary w-full md:w-auto text-center md:text-left py-2 md:py-1";

  return (
    <div className="fixed top-0 left-0 w-full z-20 bg-[rgba(0,0,0,0.46)] backdrop-blur-md bg-opacity-50">
      <div className="w-full flex items-center justify-between px-6 md:px-22.5 py-4">
        <div>
          <button className="cursor-pointer drop-shadow-[0_0_35px_rgba(255,255,255,0.7)] rounded-sm p-1">
            <svg
              width="68"
              height="34"
              viewBox="0 0 68 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.44 33.6V14.064H2.832V16.752C2.832 18.288 4.08 19.584 5.664 19.584H25.776V33.6H31.44ZM31.44 2.88C31.44 1.296 30.192 0.0479994 28.608 0.0479994H0V2.688C0 4.272 1.296 5.52 2.832 5.52H31.44V2.88Z"
                fill="#F1F1F1"
              />
              <path
                d="M66.8428 9.792C66.8428 14.016 64.0588 17.808 60.0268 19.104L67.4188 33.6H63.3388C61.9948 33.6 60.7468 32.88 60.1228 31.68L53.9788 19.584H40.3468V30.768C40.3468 32.352 39.0508 33.6 37.4668 33.6H34.6828V14.064H57.0508C59.4028 14.064 61.2748 12.144 61.2748 9.792C61.2748 7.44 59.4028 5.52 57.0508 5.52H37.5148C35.9308 5.52 34.6828 4.224 34.6828 2.688V0.0479994H56.7628C56.8108 0 56.9548 0 57.0508 0C62.4268 0 66.8428 4.416 66.8428 9.792Z"
                fill="#F1F1F1"
              />
            </svg>
          </button>
        </div>

        {/* Desktop */}
        <nav className="hidden md:flex gap-4">
          <a className={navItemsClasses} href="#">
            Home
          </a>
          <a className={navItemsClasses} href="#about">
            About
          </a>
          <a className={navItemsClasses} href="#specs">
            Spec
          </a>
        </nav>

        <div className="hidden md:block">
          <Button text="CONTACT" navigateTo="#footer" />
        </div>

        {/* Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="block md:hidden text-white focus:outline-none cursor-pointer z-30"
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-black/90 backdrop-blur-lg w-full ${
          isOpen ? "max-h-75 border-b border-white/10" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col items-start gap-4 px-6 pb-6 pt-2">
          <a
            className={navItemsClasses}
            href="#"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            className={navItemsClasses}
            href="#about"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            className={navItemsClasses}
            href="#specs"
            onClick={() => setIsOpen(false)}
          >
            Spec
          </a>
          <div
            className="w-full pt-2 flex justify-start"
            onClick={() => setIsOpen(false)}
          >
            <Button text="CONTACT" navigateTo="#footer" />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
