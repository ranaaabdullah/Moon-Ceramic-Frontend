import clsx from "clsx";
import React from "react";

const Button = ({
  children,
  className,
  text,
  type,
  bg,
  border,
  borderWhite,
  onClick,
}) => {
  return (
    <div
      type={type}
      onClick={onClick}
      className={clsx(
        ` uppercase tracking-wider  text-nowrap inline-flex justify-center items-center items-center text-black font-semibold py-2 `,
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
    </div>
  );
};

export default Button;
