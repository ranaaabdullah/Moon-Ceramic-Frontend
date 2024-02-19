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
import { useQuery } from "@tanstack/react-query";
import network from "../../config/network";
import URL from "../../config/url";
import useProductData from "../../hooks/useProductData";

const Home = () => {
  const dispatch = useDispatch();

  const { data } = useProductData();
  dispatch(addProducts(data));

  const navigate = useNavigate();

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
        {data?.length > 0 && (
          <BestSellers data={data} images={8} title={"best sellers"} />
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
          {data?.length > 0 && (
            <BestSellers
              data={data}
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
