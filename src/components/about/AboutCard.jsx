import React from "react";

const AboutCard = ({ swap, heading, desc, img }) => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-24 ">
        {swap ? (
          <>
            <div>
              <img className="" src={img} alt="" />
            </div>
            <div className="flex flex-col justsify-center  items-center  text-center gap-8 bg-primary-200  py-14">
              <h3 className="text-primary-100 font-semibold  uppercase tracking-widest text-lg">
                {heading}
              </h3>
              <p className="text-primary-100 ">{desc}</p>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col justify-center  items-center p-8  text-center gap-8 bg-primary-200  ">
              <h3 className="text-brown-100 font-semibold  uppercase tracking-widest text-2xl">
                {heading}
              </h3>
              <p className="text-primary-100 px-10   lg:px-24">{desc}</p>
            </div>
            <div>
              <img className="h-[400px] w-[600px]" src={img} alt="" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AboutCard;
