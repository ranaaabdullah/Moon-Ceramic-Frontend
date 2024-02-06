import React from "react";
import Card from "../Card";

const ProductList = ({ data }) => {
  return (
    <div>
      <div className="grid grid-cols-2 p-3 lg:grid-cols-3 gap-4 lg:gap-10">
        {data?.map((item, index) => {
          return <Card item={item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default ProductList;
