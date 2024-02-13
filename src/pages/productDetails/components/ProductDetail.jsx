import React, { useState } from "react";
import Button from "../../../components/Button";
import { CiHeart } from "react-icons/ci";

import Accordion from "../../../components/Accordion";
import { SocialMedia } from "../../../common";
const ProductDetail = () => {
  const [showDetail, setShowDetail] = useState(false);
  const [showDimension, setShowDimension] = useState(false);
  const [showReview, setshowReview] = useState(false);
  return (
    <div>
      <div className="p-2 lg:px-10 px-3 flex flex-col gap-4 ">
        <h2 className="text-primary-100 tracking-widest font-bold uppercase  lg:text-xl">
          Marin White Dinner Plate
        </h2>
        <div className="flex items-center gap-5 ">
          <p>(1256 Reviews)</p>
          <p className="">
            Stock: <span className="text-brown-200"> In stock</span>
          </p>
        </div>
        <div className="text-2xl flex items-center gap-2">
          <p>$35</p>
          <span className="text-secondary-200"> $50</span>
        </div>
        <div>
          <h2>Color : Blue</h2>
          <div>
            {" "}
            <div className="flex  gap-3">
              <div className="w-4 h-4  bg-white border-primary-100 border " />
              <div className="w-4 h-4  bg-brown-200 " />
              <div className="w-4 h-4  bg-[#CCD8CE] " />
              <div className="w-4 h-4  bg-[#B4555D]  " />
              <div className="w-4 h-4  bg-[#9B92A1]  " />
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <div className="flex items-center gap-2 border-2 border-primary-100">
            <Button>-</Button>
            <p>1</p>
            <Button>+</Button>
          </div>
          <div>
            <Button
              className={
                "flex gap-1 justify-center lg:!px-28    bg-primary-100 text-white  text-center"
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="flex items-center lg:justify-start justify-center gap-2">
          <Button className={"lg:!px-40"} border={true}>
            Buy now
          </Button>
          <Button border={true} className={"!py-2"}>
            <CiHeart size={24} />
          </Button>
        </div>
        <div className="flex flex-col py-4 gap-2 ">
          <p className="font-semibold ">Share this:</p>
          <div className="flex items-center  gap-4">
            {/* <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" /> */}
            {SocialMedia.map((item, index) => {
              return <img key={index} src={item.image} />;
            })}
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Accordion
            heading={"Details"}
            desc={
              " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia fugiat quos reiciendis animi omnis, similique blanditiis dolorum eos. Animi mollitia sed maiores autem provident sint nesciunt incidunt nemo ab a!"
            }
            open={showDetail}
            setOpen={setShowDetail}
          />
          <Accordion
            heading={"Dimensions"}
            desc={
              " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia fugiat quos reiciendis animi omnis, similique blanditiis dolorum eos. Animi mollitia sed maiores autem provident sint nesciunt incidunt nemo ab a!"
            }
            open={showDimension}
            setOpen={setShowDimension}
          />
          <Accordion
            heading={"Reviews"}
            desc={
              " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia fugiat quos reiciendis animi omnis, similique blanditiis dolorum eos. Animi mollitia sed maiores autem provident sint nesciunt incidunt nemo ab a!"
            }
            open={showReview}
            setOpen={setshowReview}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
