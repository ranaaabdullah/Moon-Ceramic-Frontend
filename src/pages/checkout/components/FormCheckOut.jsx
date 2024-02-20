import React from "react";
import InputText from "../../../components/inputField/InputText";
import InputSelect from "../../../components/inputField/InputSelect";
import InputTextArea from "../../../components/inputField/InputTextArea";
import { useFormik } from "formik";
import { checkOutSchema } from "../../../schemas";
import { Button } from "../../../components";

const FormCheckOut = ({setCheckOutData}) => {
  const inputData = [
    { label: "First Name *", placeholder: "Samatha Clarken", key: "fname" },
    { label: "Last Name *", placeholder: "Clarken", key: "lname" },
    { label: "Company", placeholder: "Moon", key: "company" },
    {
      label: "Country / Region *",
      placeholder: "United states",
      key: "country",
    },
    { label: "Street address *", placeholder: "Address", key: "address" },
    { label: "Town / City *", placeholder: "City", key: "city" },
    { label: "State *", placeholder: "State", key: "state" },
    { label: "ZIP Code", placeholder: "ZIP Code", key: "zipCode" },
    { label: "Phone *", placeholder: "(123) 456 - 7890", key: "phone" },
    { label: "Email", placeholder: "example@youremail.com", key: "email" },
    {
      label: "Order notes",
      placeholder: "Type your message here...",
      key: "Onote",
    },
  ];
  const countries = ["Pakistan", "Canada", "France", "Germany"];
  const states = ["Punjab", "Sindh", "KPK", "Balochistan"];

  const initialValues = {
    fname: "",
    lname: "",
    company: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    Onote: "",
  };

  const { values, errors, handleSubmit, handleChange } = useFormik({
    initialValues: initialValues,
    validationSchema: checkOutSchema,
    onSubmit: (val, action) => {
      setCheckOutData(val);
      // action.resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 px-2  lg:grid-cols-2 gap-4 lg:w-[700px]">
          {inputData?.map((input) => (
            <>
              <div
                className={
                  input.key === "address" ||
                  input.key === "email" ||
                  input.key === "Onote"
                    ? "lg:col-span-2"
                    : "col-span-1"
                }
              >
                {input.key === "country" || input.key === "state" ? (
                  <InputSelect
                    data={input.key === "country" ? countries : states}
                    label={input.label}
                    name={input.key}
                    onChange={handleChange}
                    value={values[input.key]}
                    error={errors[input.key]}
                  />
                ) : input.key === "Onote" ? (
                  <InputTextArea
                    label={"Order notes"}
                    placeholder={"Type your message here..."}
                    name={input.key}
                    value={values[input.key]}
                    error={errors[input.key]}
                    onChange={handleChange}
                  />
                ) : (
                  <>
                    <InputText
                      key={input.key}
                      label={input.label}
                      placeholder={input?.placeholder}
                      name={input?.key}
                      onChange={handleChange}
                      value={values[input.key]}
                      error={errors[input.key]}
                    />
                  </>
                )}
              </div>
            </>
          ))}
        </div>
        <Button className={'hidden'} id={'ab'} type={"submit"} onClick={handleSubmit}>
          send
        </Button>
      </form>
    </div>
  );
};

export default FormCheckOut;
