import React from 'react'
import image from '../../assets/section1/image1'

const Section1 = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      <div>
        <img src={image} alt="" />
        <h3>TableWare</h3>
      </div>{" "}
      <div>
        <img src={image} alt="" />
        <h3>TableWare</h3>
      </div>{" "}
      <div>
        <img src={image} alt="" />
        <h3>TableWare</h3>
      </div>{" "}
      <div>
        <img src={image} alt="" />
        <h3>TableWare</h3>
      </div>{" "}
      <div>
        <img src={image} alt="" />
        <h3>TableWare</h3>
      </div>
    </div>
  );
}

export default Section1