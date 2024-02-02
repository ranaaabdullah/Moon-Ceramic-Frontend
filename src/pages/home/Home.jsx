import React from "react";
import image from "../../assets/Image.png";
import Header from "../../components/Header";
import Banner from "../../components/home/Banner";
import Section1 from "../../components/home/Section1";
import Banner2 from "../../components/home/Banner2";
import BestSellers from "../../components/home/BestSellers";

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Section1 />
      <Banner2
        title={" Up to 40% off our Christmas collection"}
        desc={
          "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit hasellus mollis sit aliquam sit nullam neque ultrices."
        }
        img={image}
      />
      <BestSellers />
      <Banner2
        title={" Made in viet Nam since 1450"}
        desc={
          " Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit hasellus mollis sit aliquam sit nullam neque ultrices."
        }
        img={image}
        button={"learn more "}
        
      />
    </>
  );
};

export default Home;
