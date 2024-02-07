import React from "react";
import Carousel from "../../components/productDetail/Carousel";

import logo5 from "../../assets/contact/youtube.png";
import ProductDetail from "../../components/productDetail/ProductDetail";
import BestSellers from "../../components/home/BestSellers";
import image11 from "../../assets/NewArrival/image1.png";
import image22 from "../../assets/NewArrival/image2.png";
import image33 from "../../assets/NewArrival/image3.png";
import image44 from "../../assets/NewArrival/image4.png";

const ProductDetails = () => {

    const data1 = [
    {
      img: image11,
      title: "Small Ecru Ceramic Compote",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      img: image22,
      title: "Small Ecru Ceramic Compote",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      img: image33,
      title: "Small Ecru Ceramic Compote",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      img: image44,
      title: "Small Ecru Ceramic Compote",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-4 lg:mx-28">
        <div>
          <Carousel />
        </div>
        <div>
          <ProductDetail />
        </div>
      </div>
      <div className="">
        <BestSellers data={data1} title={"Similar Items"} />
      </div>
    </div>
  );
};

export default ProductDetails;
