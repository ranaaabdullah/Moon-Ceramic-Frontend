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

const ProductDetails = () => {
  const data1 = useSelector((state) => state.product.products);
  const stateCart = useSelector((state) => state.cart.cart);

  const data = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
    { image: image4 },
    { image: image5 },
  ];

  const [product, setProduct] = useState({});
  const [color, setColor] = useState("");
  const [cartAdded, setCartAdded] = useState(false);

  const { productId } = useParams();

  const fetchSingleProduct = async () => {
    axios
      .get(`http://localhost:8080/api/v1/product/${productId}`)
      .then((res) => {
        setProduct(res.data.data);
        setColor(res?.data?.data?.color[0]);
      })
      .catch((err) => console.log(err));
  };
  const exist = stateCart?.find((product) => product.id === productId);

  useEffect(() => {
    if (productId) {
      fetchSingleProduct();
    }
  }, [productId]);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 py-4 lg:mx-28">
        <div>
          <Carousel data={product?.photos} />
        </div>
        <div>
          <ProductDetail
            setCartAdded={setCartAdded}
            color={color}
            setColor={setColor}
            cartAdded={cartAdded}
            data={product}
            exist={exist ? true : false}
          />
        </div>
      </div>
      <div className="mx-40">
        <BestSellers data={data1} title={"Similar Items"} />
      </div>
    </div>
  );
};

export default ProductDetails;
