import React, { useRef, useState } from "react";

import { IoIosArrowBack } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { BillBox, Button, FormCheckout } from "../../components";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import { checkOutSchema } from "../../schemas";
const Checkout = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({});

  // const handleSubmitData=(val)=>{

  //   setData(prev=>({...prev, ...val}))

  // }

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
      console.log(val, "VALUESS");
      setData(val);

      // action.resetForm();
    },
  });



  const createOrder = (data)=>{
    console.log(data)
  }
  return (
    <div className="lg:px-40 py-14">
      <div className=" flex lg:flex-row flex-col gap-14">
        <div className="flex-col flex lg:gap-8 gap-4 ">
          <h2 className="text-xl font-semibold">Billing Details</h2>
          <FormCheckout
            inputData={inputData}
            handleSubmit={handleSubmit}
            values={values}
            handleChange={handleChange}
            errors={errors}
          />
          <div className="flex lg:flex-row flex-col items-center lg:justify-between">
            <Button className={"flex items-center gap-4"}>
              <IoIosArrowBack />
              Return to cart
            </Button>
            <Button
              onClick={() => navigate("/shop")}
              className={
                "flex gap-2 justify-center lg:!px-14 py-3  bg-primary-100 text-white  text-center"
              }
            >
              Continue to shipping
              <FaArrowRight />
            </Button>
          </div>
        </div>
        <BillBox  createOrder={createOrder} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
};

export default Checkout;
