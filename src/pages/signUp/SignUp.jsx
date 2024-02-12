import React from "react";

import { FaArrowRight } from "react-icons/fa6";
import SignUpImage from "../../assets/signUp.jpg";

import Button from "../../components/Button";
import { InputText } from "../../components";
import { useFormik } from "formik";
import { signSchema } from "../../schemas";

const SignUp = () => {
  // const schema = z.object({
  //   fname: z.string().min(2).max(30),
  //   email: z.string().email().min(2).max(30),
  //   number: z.string().min(2).max(30),
  //   password: z.string().min(2).max(30),
  // });

  const initialValues = {
    fname: "",
    email: "",
    number: "",
    password: "",
  };

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: signSchema,
    onSubmit: (val, action) => {
      console.log(val);
      action.resetForm();
    },
  });

  console.log(errors);
  return (
    <div>
      <div className="grid grid-cols-1  lg:grid-cols-2 lg:px-40 py-8">
        <div className="flex justify-center items-center gap-3 py-3 flex-col">
          <h3 className="font-bold text-4xl uppercase tracking-widest">
            SignUp
          </h3>
          <form onSubmit={handleSubmit}>
            <InputText
              name={"fname"}
              placeholder={"Enter Your name "}
              label={"full name"}
              className={" lg:!w-96 capitalize"}
              value={values.fname}
              onChange={handleChange}
              error={errors.fname}
            />{" "}
            <InputText
              name={"email"}
              placeholder={"Enter Your Email Address"}
              label={"Email Address"}
              className={" lg:!w-96 "}
              value={values.email}
              onChange={handleChange}
              error={errors.email}
            />{" "}
            <InputText
              name={"number"}
              placeholder={"Enter Your Phone Number"}
              label={" phone number"}
              className={" lg:!w-96"}
              type={"number"}
              value={values.number}
              onChange={handleChange}
              error={errors.number}
            />{" "}
            <InputText
              name={"password"}
              placeholder={"Enter Password"}
              className={"lg:!w-96"}
              label={"Password"}
              type={"password"}
              value={values.password}
              error={errors.password}
              onChange={handleChange}
            />
            <Button
              type={"submit"}
              className={
                "flex gap-1 justify-center mt-4  bg-primary-100 text-white  lg:!px-[148px] text-center"
              }
            >
              SignUp
              <FaArrowRight />
            </Button>
          </form>
        </div>
        <div>
          <img src={SignUpImage} className="rounded" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
