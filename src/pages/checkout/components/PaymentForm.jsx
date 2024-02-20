import React, { useMemo } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { Button } from "../../../components";

const useOptions = () => {
  const submitButton = document.getElementById('ab')
  console.log({submitButton})
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize: 14,
          color: "#fff",
          letterSpacing: "0.025em",
          fontFamily: "Inter",
          "::placeholder": {
            color: "#A6A6A8",
          },
        },
        invalid: {
          color: "#9e2146",
        },
        placeholder: "Custom PlaceHolder",
      },
    }),
    []
  );

  return options;
};

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });
    console.log("[PaymentMethod]", payload);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="border border-primary-200 p-4">
        <CardNumberElement
          options={{ ...options, placeholder: "Card Number" }}
        />
      </div>
      <div className="grid grid-cols-2 gap-2 pt-4">
        <div className="border border-primary-200 p-4">
          <CardExpiryElement
            options={{ ...options, placeholder: "Expiration date  (MM/YY)" }}
          />
        </div>

        <div className="border border-primary-200 p-4">
          <CardCvcElement
            options={{ ...options, placeholder: "Security code" }}
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          onClick={handleSubmit}
          borderWhite={true}
          className={"mt-4 w-full text-primary-200"}
          disabled={!stripe}
        >
          Place order
        </Button>
      </div>
    </form>
  );
};

export default PaymentForm;
