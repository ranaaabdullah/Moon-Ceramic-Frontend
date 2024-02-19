import React, { useEffect, useState } from "react";

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
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import URL from "../../config/url";
import useProductDataById from "../../hooks/useProductDataById";

const ProductDetails = () => {
  const data1 = useSelector((state) => state.product.products);
  const stateCart = useSelector((state) => state.cart.cart);

  const [color, setColor] = useState("");
  const [cartAdded, setCartAdded] = useState(false);

  const { productId } = useParams();
  const { data } = useProductDataById(productId);

  const exist = stateCart?.find((product) => product.id === productId);

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-4 lg:mx-28">
        <div>{data?.data && <Carousel data={data?.data?.photos} />}</div>
        <div>
          {data?.data && (
            <ProductDetail
              setCartAdded={setCartAdded}
              color={color}
              setColor={setColor}
              cartAdded={cartAdded}
              data={data?.data}
              exist={exist ? true : false}
            />
          )}
        </div>
      </div>
      <div className="mx-40">
        <BestSellers data={data1} images={4} title={"Similar Items"} />
      </div>
    </div>
  );
};

export default ProductDetails;
