import React from "react";
import FilterRow from "../../components/shop/FilterRow";
import Card from "../../components/Card";
import Image1 from "../../assets/sellers/image1.png";
import Image2 from "../../assets/sellers/image2.png";
import Image3 from "../../assets/sellers/image3.png";
import Image4 from "../../assets/sellers/image4.png";
import ProductList from "../../components/shop/ProductList";
import Pagination from "../../components/Pagination";

const Shop = () => {
  const data = [
    {
      img: Image1,
      title: "Small Ecru Ceramic Compote",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      img: Image2,
      title: "Warrick White Vase 14",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      img: Image3,
      title: "Porcelain Dinner Plate",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      img: Image4,
      title: "Warrick White Vase 20",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      img: Image1,
      title: "Rounded Dual Handled Vase",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      img: Image2,
      title: "Marin White Dinner Plate",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      img: Image3,
      title: "Tall Cream Ceramic Vase",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      img: Image4,
      title: "Luana Bowl",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      img: Image1,
      title: "Rounded Dual Handled Vase",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
  ];
  return (
    <div className="lg:px-36 py-14">
      <div className="flex  lg:flex-row flex-col items-center justify-between">
        <p className="fonts">Showing 120 items </p>

        <div className="flex items-center">
          <p className="">Sort by:</p>
          <select
            id="countries"
            className="bg-gray-50  text-gray-900 text-sm   pe-14 p-2 "
          >
            <option selected>Name</option>
            <option value="US">size</option>
          </select>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col   items-start gap-5 py-4">
        <FilterRow />
        <ProductList data={data} />
      </div>
      <div className="flex items-center justify-center lg:justify-end">
        <Pagination />
      </div>
    </div>
  );
};

export default Shop;
