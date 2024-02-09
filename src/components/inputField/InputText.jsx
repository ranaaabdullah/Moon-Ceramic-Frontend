import clsx from "clsx";
import React from "react";

const InputText = ({ label, placeholder, className, type }) => {
  return (
    <div>
      <div>
        {label && (
          <label className="block text-primary-100 capitalize text-sm font-bold mb-2">
            {label}
          </label>
        )}
        <input
          // className=" border-2 border-primary-100  w-full py-4 px-3 text-primary-100 leading-tight focus:outline-none focus:shadow-outline"
          className={clsx(
            ` border-2 border-primary-100  w-full py-4 px-3 text-primary-100  leading-tight focus:outline-none focus:shadow-outline`,

            className
          )}
          type={
            type === "number"
              ? "number"
              : type === "password"
              ? "password"
              : "text"
          }
          placeholder={placeholder}
        />
      </div>
    </div>
  );
};

export default InputText;
