import React from "react";
import BannerPic from "../../assets/home/banner.png";
import icon from "../../assets/home/Icon.png";
import Button from "../Button";

const Banner = () => {
  return (
    <div className="relative ">
      <div className="w-screen">
        <img className="w-screen object-contain" src={BannerPic} alt=""></img>
      </div>
      <div className=" absolute lg:top-0 h-full lg:left-40 flex flex-col  w-96 text-center justify-center  gap-5 items-center bg-brown-100 p-5">
        <div className="">
          <img src={icon} alt=""></img>
        </div>
        <p className="text-white font-medium">
          Handcrafted in Viet Nam since 1650
        </p>
        <h3 className="text-4xl text-white font-semibold">
          BAT TRANG DINNER SET
        </h3>

        <Button className={"px-14"} text={"brown"}>
          shop now
        </Button>
      </div>
    </div>
  );
};

export default Banner;
