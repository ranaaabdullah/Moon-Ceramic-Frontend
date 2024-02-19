import React, { useState, useEffect } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import "../style/Card.css";

import InputText from "../../../components/inputField/InputText";
import Button from "../../../components/Button";
import imgCard from "../../../assets/card.png";
import CheckoutForm from "./CheckoutForm";

const PaymentForm = () => {
  const stripePromise = loadStripe(
    "pk_test_51NzIqNBrJDSCC8vY3LvdBzXSfHNHNRhmitjgLKbKVZjtJ2XGv3VgRoxkJxaxAJFCeAS12BFxxJjgPpPTJGICoYU20066LIu3ts"
  );

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      <div className="flex-col flex gap-8 bg-primary-100 px-5 py-8 mt-5">
        {/* <h2 className="text-white text-lg">Payment</h2>
        <div className="flex items-center pb-6  border-b border-white   justify-between">
          <p className="text-white">Credit Card</p>
          <img src={imgCard} alt="" />
        </div> */}
        <div></div>
        {/* <div className="grid grid-cols-1 gap-4">
          <InputText
            placeholder={"Card Number "}
            className={"bg-primary-100 text-white border-white border"}
          />
          <InputText
            placeholder={"Name on card "}
            className={"bg-primary-100 text-white border-white  border"}
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <InputText
            placeholder={"Expiration date  (MM/YY) "}
            className={
              "bg-primary-100 border-white  text-white placeholder:text-wrap border"
            }
          />
          <InputText
            placeholder={"Security code "}
            className={"bg-primary-100 border-white  text-white border"}
          />
        </div>
        <Button
          borderWhite={true}
          text={"white"}
          className={"lg:!px-36 !px-16 py-3"}
        >
          Place order
        </Button> */}
      </div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default PaymentForm;
