import React from 'react'
import Card from '../Card';

const ProductList = ({data}) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {data?.map((item, index) => {
          return <Card item={item} index={index} />;
        })}
      </div>
    </div>
  );
}

export default ProductList