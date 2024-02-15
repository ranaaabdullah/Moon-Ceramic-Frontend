import React from "react";
import Image1 from "../../assets/sellers/image1.png";
import Image2 from "../../assets/sellers/image2.png";
import Image3 from "../../assets/sellers/image3.png";
import Image4 from "../../assets/sellers/image4.png";
import { FilterRow, Pagination, ProductList } from "../../components";
import { useSelector } from "react-redux";

const Shop = () => {
  const products = useSelector((state) => state.product.products);
  const data = [
    {
      id: 1,
      img: Image1,
      title: "Small Ecru Ceramic Compote",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      id: 1,
      img: Image2,
      title: "Warrick White Vase 14",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      id: 1,
      img: Image3,
      title: "Porcelain Dinner Plate",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      id: 1,
      img: Image4,
      title: "Warrick White Vase 20",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      id: 1,
      img: Image1,
      title: "Rounded Dual Handled Vase",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      id: 1,
      img: Image2,
      title: "Marin White Dinner Plate",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      id: 1,
      img: Image3,
      title: "Tall Cream Ceramic Vase",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      id: 1,
      img: Image4,
      title: "Luana Bowl",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      id: 1,
      img: Image1,
      title: "Rounded Dual Handled Vase",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
  ];
  return (
    <div className="lg:px-36 py-14">
      <div className="flex  lg:flex-row flex-col items-center justify-between">
        <p className="font-semibold">Showing 120 items </p>

        <div className="flex items-center">
          <p className="">Sort by:</p>
          <select className="bg-gray-50  text-primary-100 text-sm pe-14 p-2 ">
            <option selected>Name</option>
            <option value="size">size</option>
          </select>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col   items-start gap-5 py-4">
        <FilterRow />
        <ProductList data={products} />
      </div>
      <div className="flex items-center justify-center lg:justify-end">
        <Pagination />
      </div>
    </div>
  );
};

export default Shop;
