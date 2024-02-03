import React from "react";

const Banner2 = ({ title, desc, img, button = "shop now" }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  place-items-center ">
      <div className="flex flex-col justsify-center  items-center h-80 text-center gap-8 bg-primary-200 px-24 py-14">
        <h3 className=" text-4xl uppercase font-semibold">{title}</h3>
        <p className="text-primary-100 ">{desc}</p>
        <button className=" uppercase  p-3 px-20  font-medium     text-primary-100">
          <h2 className="text-2xl underline">{button}</h2>
        </button>
      </div>
      <div>
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default Banner2;
