import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { CiHeart } from "react-icons/ci";

import Accordion from "../../../components/Accordion";
import { SocialMedia } from "../../../common";

import { ApplyDiscount } from "../../../utils";
const ProductDetail = ({ data }) => {
  const [showDetail, setShowDetail] = useState(false);
  const [showDimension, setShowDimension] = useState(false);
  const [showReview, setshowReview] = useState(false);

  return (
    <div>
      <div className="p-2 lg:px-10 px-3 flex flex-col gap-4 ">
        <h2 className="text-primary-100 tracking-widest font-bold uppercase  lg:text-xl">
          {data.name}
        </h2>
        <div className="flex items-center gap-5 ">
          <p>({data.numReviews} Reviews)</p>
          <p className="">
            Stock: <span className="text-brown-200"> In stock</span>
          </p>
        </div>
        <div className="text-2xl flex items-center gap-2">
          <p>${ApplyDiscount(data.price)}</p>
          <span className="text-secondary-200"> ${data.price}</span>
        </div>
        <div>
          <div>
            {" "}
            <div className="flex  gap-3">
              {data?.color?.map((item) => {
                return <div className={`w-4 h-4 `} style={{backgroundColor:item}} />;
              })}
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
            desc={data.description}
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
