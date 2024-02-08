import React from "react";
import InputText from "../../components/InputText";
import Button from "../../components/Button";
import { FaArrowRight } from "react-icons/fa6";
import SignUpImage from "../../assets/signUp.jpg";

const SignUp = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-40 py-8">
        <div className="flex justify-center items-center gap-3  flex-col">
          <h3 className="font-bold text-4xl uppercase tracking-widest">
            SignUp
          </h3>
          <InputText
            placeholder={"Enter Your name "}
            label={"full name"}
            className={" lg:!w-96 capitalize"}
          />{" "}
          <InputText
            placeholder={"Enter Your Email Address"}
            label={"Email Address"}
            className={" lg:!w-96 capitalize"}
          />{" "}
          <InputText
            placeholder={"Enter Your Phone Number"}
            label={" phone number"}
            className={" lg:!w-96 capitalize"}
          />{" "}
          <InputText
            placeholder={"Enter Password"}
            className={"lg:!w-96"}
            label={"Password"}
          />
          <Button
            className={
              "flex gap-1 justify-center   bg-primary-100 text-white  lg:!px-[148px] text-center"
            }
            border={true}
          >
            SignUp
            <FaArrowRight />
          </Button>
        </div>
        <div>
          <img src={SignUpImage} className="rounded" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
