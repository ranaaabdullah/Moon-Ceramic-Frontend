import React from "react";

import image11 from "../../assets/NewArrival/image1.png";
import image22 from "../../assets/NewArrival/image2.png";
import image33 from "../../assets/NewArrival/image3.png";
import image44 from "../../assets/NewArrival/image4.png";
import image1 from "../../assets/ProductDetail/image1.png";
import image2 from "../../assets/ProductDetail/image2.png";
import image3 from "../../assets/ProductDetail/image3.png";
import image4 from "../../assets/ProductDetail/image4.png";
import image5 from "../../assets/ProductDetail/image5.png";
import { BestSellers, Carousel, ProductDetail } from "../../components";

const ProductDetails = () => {
  const data = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
  ];

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
          <Carousel data={data} />
        </div>
        <div>
          <ProductDetail />
        </div>
      </div>
      <div>
        <BestSellers data={data1} title={"Similar Items"} />
      </div>
    </div>
  );
};

export default ProductDetails;
