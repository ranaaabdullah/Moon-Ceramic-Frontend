import clsx from "clsx";
import React from "react";

const Button = ({ children, className, text, type ,bg, border, borderWhite ,onClick}) => {
  return (
    <button
    type={type}
      onClick={onClick}
      className={clsx(
        ` uppercase tracking-wider  text-nowrap inline-flex items-center text-black font-semibold py-2  px-5`,
        {
          "text-brown-100 bg-white  ": text === "brown",
          "text-primary-200  border-white  ": text === "white",
          "underline leading-5": bg === "none",
          "border-black border-2 ": border,
          "border-white border-2 ": borderWhite,
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
