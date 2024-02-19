import React from "react";

import { IoIosArrowBack } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
import { BillBox, Button, FormCheckout } from "../../components";

const Checkout = () => {
  return (
    <div className="lg:px-40 py-14">
      <div className=" flex lg:flex-row flex-col gap-14">
        <div className="flex-col flex lg:gap-8 gap-4 ">
          <h2 className="text-xl font-semibold">Billing Details</h2>
          <FormCheckout />
          <div className="flex lg:flex-row flex-col items-center lg:justify-between">
            <Button className={"flex items-center gap-4"}>
              <IoIosArrowBack />
              Return to cart
            </Button>
            <Button
              className={
                "flex gap-2 justify-center lg:!px-14 py-3  bg-primary-100 text-white  text-center"
              }
            >
              Continue to shipping
              <FaArrowRight />
            </Button>
          </div>
        </div>
        <BillBox />
      </div>
    </div>
  );
};

export default Checkout;
