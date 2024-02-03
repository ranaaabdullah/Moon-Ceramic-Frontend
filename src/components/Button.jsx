import clsx from "clsx";
import React from "react";
import { Children } from "react";

const Button = ({ children, className, text, bg, border }) => {
  return (
    <button
      className={clsx(
        ` uppercase tracking-wider inline-flex items-center text-black font-semibold py-2  px-5`,
        {
          "text-brown-100 bg-white  ": text === "brown",
          "text-primary-200  border-white  ": text === "white",
          "underline leading-5": bg === "none",
          "border-black border-2 ": border,
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
