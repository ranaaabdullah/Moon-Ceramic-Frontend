import React from "react";
import loginImage from "../../assets/login.png";
import { FaArrowRight } from "react-icons/fa6";
import Button from "../../components/Button";
import { InputText } from "../../components";

const Login = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-40 py-8">
        <div>
          <img src={loginImage} className="rounded" alt="" />
        </div>
        <div className="flex justify-center items-center gap-3  flex-col">
          <h3 className="font-bold text-4xl tracking-widest ">Login</h3>
          <InputText
            placeholder={"Enter Email Address"}
            label={"Email Address"}
            className={" lg:!w-96"}
          />{" "}
          <InputText
            placeholder={"Enter Password"}
            className={"lg:!w-96"}
            type={"password"}
            label={"Password"}
          />
          <Button
            className={
              "flex gap-1 justify-center   bg-primary-100 text-white  lg:!px-[155px] text-center"
            }
            border={true}
          >
            login
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
