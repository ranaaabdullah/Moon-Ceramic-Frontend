import React from "react";

import TableCart from "../../components/cart/TableCart";
import InputText from "../../components/InputText";
import Button from "../../components/Button";

const Cart = () => {
  return (
    <div className="lg:px-40 px-3 py-8 flex flex-col gap-4">
      <h2 className="font-bold text-xl">Cart (2 items) </h2>
      <TableCart />
      <div className="flex items-center lg:flex-row flex-col  gap-2 justify-between">
        <div className="flex flex-col lg:flex-row  items-center gap-2">
          <InputText placeholder={"Coupon code"} />
          <Button className={"bg-primary-100 text-white !py-4"}>
            Apply Coupon
          </Button>
        </div>
        <Button className={"bg-primary-100 text-white lg:!px-14 !py-4"}>
          Update cart
        </Button>
      </div>
      <div className="flex lg:justify-end">
        <div className="flex flex-col gap-4 px-5  text-white bg-primary-100 lg:px-16 py-12">
          <h2 className="text-xl font-semibold">Cart Totals</h2>
          <div className="flex justify-between   lg:gap-56">
            <p>Subtotal</p>
            <p>$ 2,000.00</p>
          </div>
          <div className="flex justify-between lg:gap-56">
            <p>Cart Items</p>
            <p className="px-5"> ( 2 )</p>
          </div>
          <Button
            borderWhite={true}
            className={"bg-primary-100 text-white lg:!px-20 "}
          >
            Proceed to checkout
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
