import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ text, type, navigateTo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!navigateTo) {
      return;
    }

    if (navigateTo.startsWith("#")) {
      const targetElement = document.querySelector(navigateTo);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.replaceState(null, "", navigateTo);
      }

      return;
    }

    navigate(navigateTo);
  };

  return (
    <button
      type={type || "button"}
      onClick={handleClick}
      className="relative cursor-pointer drop-shadow-[0_0_35px_rgba(255,255,255,0.25)] font-medium tracking-wider text-2xl font-oswald px-4 hover:text-neutral-dark transition-all duration-200 before:absolute before:-z-10 before:inset-0 before:bg-primary before:scale-x-4 before:origin-left before:transition-transform before:duration-200 hover:before:scale-x-100"
    >
      {text || "Button"}
    </button>
  );
};

export default Button;
