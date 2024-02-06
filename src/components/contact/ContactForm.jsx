import React from "react";
import InputText from "../inputField/InputText";
import Button from "../Button";
import { FaArrowRight } from "react-icons/fa";

const ContactForm = () => {
  const inputField = [
    { label: "Name", placeHodler: "Samatha Clarken", key: "name" },
    { label: "Email", placeHodler: "example@youremail.com", key: "email" },
    { label: "Phone", placeHodler: "(123) 456 - 7890", key: "phone" },
    { label: "Company", placeHodler: "Moon", key: "company" },
  ];
  return (
    <div className="lg:px-64 px-3 pb-14 ">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {inputField.map((input) => (
          <InputText data={input} />
        ))}
      </div>
      <div className="grid grid-cols-1">
        <div>
          <label className="block text-primary-100 text-sm font-bold mb-2">
            Message
          </label>
          <textarea
            className=" border-2 border-primary-100  w-full h-32 py-4 px-3 text-primary-100 leading-tight placeholder:items-start focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="Type your message here..."
          />
        </div>
      </div>
      <div className="flex items-center pt-5 justify-center">
        <Button
          className={
            "flex gap-1 justify-center   bg-primary-100 text-white w-full text-center"
          }
          border={true}
        >
          send message
          <FaArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
