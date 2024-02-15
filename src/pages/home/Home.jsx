import React, { useEffect, useState } from "react";
import image from "../../assets/Image.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import Image1 from "../../assets/sellers/image1.png";
import Image2 from "../../assets/sellers/image2.png";
import Image3 from "../../assets/sellers/image3.png";
import Image4 from "../../assets/sellers/image4.png";
import image11 from "../../assets/NewArrival/image1.png";
import image22 from "../../assets/NewArrival/image2.png";
import image33 from "../../assets/NewArrival/image3.png";
import image44 from "../../assets/NewArrival/image4.png";

import { useNavigate } from "react-router-dom";
import {
  Banner,
  BannerCard,
  BestSellers,
  EmailCard,
  Section1,
} from "../../components";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../redux/slices/ProductSlice";

const Home = () => {
  const [products, setProducts] = useState({});
  const dispatch = useDispatch();

  const fetchProductList = async () => {
    axios
      .get("http://localhost:8080/api/v1/product")
      .then((res) => {
        setProducts(res.data);
        dispatch(addProducts(res.data));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchProductList();
  }, []);


  const navigate = useNavigate();
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
    <>
      <Banner />
      <div className="lg:mx-40">
        <Section1 />
        <BannerCard
          button={"shop now"}
          title={" Up to 40% off our Christmas collection"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit hasellus mollis sit aliquam sit nullam neque ultrices."
          }
          img={image}
          onClick={() => navigate("/shop")}
        />
        {products.length > 0 && (
          <BestSellers data={products} images={8} title={"best sellers"} />
        )}
        <BannerCard
          title={" Made in viet Nam since 1450"}
          desc={
            " Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit hasellus mollis sit aliquam sit nullam neque ultrices."
          }
          img={image2}
          button={"learn more "}
          onClick={() => navigate("/blog")}
        />
        <BannerCard
          swap={true}
          title={" Made in viet Nam since 1450"}
          desc={
            " Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit hasellus mollis sit aliquam sit nullam neque ultrices."
          }
          img={image3}
          button={"learn more "}
          onClick={() => navigate("/blog")}
        />
        <div>
          {products.length > 0 && (
            <BestSellers
              data={products}
              images={4}
              title={"Discover new arrivals"}
            />
          )}
        </div>
        <div>
          <BannerCard
            heading2={"TableWare"}
            heading={"our blogs"}
            title={" Made in viet Nam since 1450"}
            desc={
              " Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit hasellus mollis sit aliquam sit nullam neque ultrices."
            }
            img={image3}
            button={"learn more "}
            onClick={() => navigate("/blog")}
          />
        </div>
        <EmailCard />
      </div>
    </>
  );
};

export default Home;
