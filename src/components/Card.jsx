import React from "react";
import Button from "./Button";

const Card = ({ item, index }) => {
  return (
    <div key={index} className="lg:w-64   ">
      <img src={item?.img} alt="" />
      <h2 className="font-semibold text-sm  uppercase">{item?.title}</h2>
      <h2 className="font-semibold text-sm  uppercase">{item.price}</h2>
      <p className="text-primary-100  pt-2 text-sm">{item?.desc}</p>
      <div className="flex items-center mt-14 justify-center">
        {/* <button className="uppercase p-2  mt-16 px-16 border-black border-2">
        <h2 className="font-semibold text-sm">Add to card</h2>
      </button> */}
        <Button border={true} className={"lg:!px-12"}>
          <h2 className="font-semibold text-sm">Add to card</h2>
        </Button>
      </div>
    </div>
  );
};

export default Card;
