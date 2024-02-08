import React from "react";
import PaymentForm from "./PaymentForm";

const BillBox = () => {
  return (
    <div>
      {" "}
      <div className="flex-col p-2 gap-4">
        <div className="flex items-center pb-6 border-b border-primary-300 gap-36 lg:gap-72">
          <h2 className="text-xl font-semibold">Product</h2>
          <h2 className="text-xl font-semibold">Subtotal</h2>
        </div>
        <div className="pt-8 flex flex-col gap-2 ">
          <div className="flex items-center  justify-between ">
            <p className="lg:text-base text-sm">
              Porcelain Dinner Plate (27cm)
            </p>
            <p>$59.00</p>
          </div>{" "}
          <div className="flex items-center  justify-between ">
            <p className="lg:text-base text-sm">Ophelia Matte Natural Vase</p>
            <p>$168.00</p>
          </div>
        </div>
        <div className="pt-8 flex flex-col  py-6 border-b border-primary-300  gap-2 ">
          <div className="flex items-center font-semibold  justify-between ">
            <p className="">Subtotal</p>
            <p>$59.00</p>
          </div>{" "}
          <div className="flex items-center font-semibold  justify-between ">
            <p className="">Shipping</p>
            <p>$15.00</p>
          </div>
        </div>
        <div>
          <div className="flex items-center  pt-5  text-xl font-semibold  justify-between ">
            <p className="">Total</p>
            <p>$490.00</p>
          </div>
        </div>

        <PaymentForm />
      </div>
    </div>
  );
};

export default BillBox;
