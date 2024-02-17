import React, { useEffect, useState } from "react";
import Button from "../../../components/Button";
import { CiHeart } from "react-icons/ci";

import Accordion from "../../../components/Accordion";
import { SocialMedia } from "../../../common";

import { ApplyDiscount } from "../../../utils";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/CartSlice";
import { useNavigate } from "react-router-dom";
const ProductDetail = ({ data, color, setColor, exist }) => {
  console.log(exist);
  const dispath = useDispatch();
  const navigate = useNavigate();
  const [showDetail, setShowDetail] = useState(false);
  const [showDimension, setShowDimension] = useState(false);
  const [showReview, setshowReview] = useState(false);

  const [quantity, setQuantity] = useState(1);
  const handleAdd = (product) => {
    dispath(
      addToCart({
        id: product.id,
        name: product.name,
        color: color,
        price: product.price,
        quantity: quantity,
        totalPrice: product.price * quantity,
        img: product?.photos[0],
      })
    );

    setQuantity(1);
  };
  return (
    <div>
      <div className="p-2 lg:px-10 px-3 flex flex-col gap-4 ">
        <h2 className="text-primary-100 tracking-widest font-bold uppercase  lg:text-xl">
          {data.name}
        </h2>
        <div className="flex items-center gap-5 ">
          <p>({data.numReviews} Reviews)</p>
          <p className="">
            Stock:{" "}
            <span className="text-brown-200">
              {" "}
              {data.countInStock > 0 ? "In stock" : "Out of Stock"}
            </span>
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
                return (
                  <div
                    onClick={() => {
                      setColor(item);
                    }}
                    className={`w-4 h-4 `}
                    style={{ backgroundColor: item }}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex  lg:flex-row items-start lg:items-center gap-4">
          <div className="flex items-center gap-2 border-2   border-primary-100">
            <Button
              onClick={() =>
                setQuantity((prevQuantity) =>
                  prevQuantity > 1 ? prevQuantity - 1 : 1
                )
              }
              disable={quantity > 1 ? false : true}
              className={"lg:px-5 md:px-8 !py-1.5 px-3"}
            >
              -
            </Button>
            <p>{quantity}</p>
            <Button
              onClick={() => setQuantity(quantity + 1)}
              className={"lg:px-5 md:px-8   !py-1.5  px-3"}
            >
              +
            </Button>
          </div>
          <div className="">
            <Button
              disable={exist}
              onClick={() => handleAdd(data)}
              className={"bg-primary-100 text-white px-8  lg:px-28 text-center"}
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="flex items-start lg:justify-start justify-center gap-2">
          <Button
            onClick={() => navigate("/cart")}
            className={"lg:!px-40"}
            border={true}
          >
            Buy now
          </Button>
          <Button border={true} className={"!py-2 px-5"}>
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
