import React from "react";
import Carousel from "../../components/productDetail/Carousel";
import Button from "../../components/Button";
import { CiHeart } from "react-icons/ci";
import logo1 from "../../assets/ProductDetail/Facebook.png";
import logo2 from "../../assets/ProductDetail/Twitter.png";
import logo3 from "../../assets/ProductDetail/Instagram.png";
import logo4 from "../../assets/ProductDetail/Linkedin.png";
import logo5 from "../../assets/contact/youtube.png";
import { FaPlus } from "react-icons/fa6";
import ProductDetail from "../../components/productDetail/ProductDetail";

const ProductDetails = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-4 lg:mx-28">
        <div>
          <Carousel />
        </div>
        <div>
            <ProductDetail/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
