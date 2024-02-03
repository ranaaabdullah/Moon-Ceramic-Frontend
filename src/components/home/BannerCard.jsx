import React from "react";
import Button from "../Button";

const BannerCard = ({
  title,
  desc,
  img,
  button = "shop now",
  swap,
  heading,
  heading2,
}) => {
  return (
    <>
      {heading && (
        <div className="flex items-center justify-center my-16">
          <h3 className="uppercase text-2xl font-semibold ">{heading}</h3>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 px-24 ">
        {swap ? (
          <>
            <div>
              <img className="" src={img} alt="" />
            </div>
            <div className="flex flex-col justsify-center  items-center  text-center gap-8 bg-primary-200  py-14">
              <h3 className=" text-4xl uppercase font-semibold">{title}</h3>
              <p className="text-primary-100 ">{desc}</p>

              <Button bg={"none"}>{button}</Button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col justsify-center  items-center  text-center gap-8 bg-primary-200  py-14">
              <h2 className="text-brown-100 font-semibold  uppercase tracking-widest text-lg">
                {heading2}
              </h2>
              <h3 className=" text-4xl uppercase font-semibold">{title}</h3>
              <p className="text-primary-100 ">{desc}</p>

              <Button bg={"none"}>{button}</Button>
            </div>
            <div>
              <img className="h-[400px] w-[600px]" src={img} alt="" />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default BannerCard;
