import React from "react";
import Button from "./button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItemsClasses =
    "relative py-1 before:absolute before:w-full before:bottom-0 before:scale-x-0 before:transition-transform before:h-[3px] before:content-[''] before:origin-left before:left-0 before:duration-200 hover:before:scale-x-100 before:bg-primary";

  return (
    <div className="fixed top-0 left-0 w-full z-20 flex items-center justify-between px-22.5 py-4 bg-[rgba(0,0,0,0.15)] backdrop-blur-md bg-opacity-50">
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
      <nav className="flex gap-4">
        <Link className={navItemsClasses} to="/">
          Home
        </Link>
        <Link className={navItemsClasses} to="#about">
          About
        </Link>
        <Link className={navItemsClasses} to="#contact">
          Contact
        </Link>
      </nav>
      <Button text="CONTACT" navigateTo="#" />
    </div>
  );
};

export default Navbar;
