import React from "react";
import Button from "../Button";

const EmailCard = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 my-12">
      <h2 className="font-semibold text-primary-300">Sign up for emails</h2>
      <h3 className="uppercase text-4xl  font-bold">
        For news, collections & more
      </h3>
      <input
        className="border-b-2 border-black w-96 placeholder:text-center placeholder:text-primary-300"
        type="text"
        placeholder="Enter your email address"
      ></input>
      <Button border={true}>sign up</Button>
    </div>
  );
};

export default EmailCard;
