import image from "../../assets/section1/image1.png";

const Section1 = () => {
  return (
    <div className="grid bg-white mt-4 px-12 border-black p-5 justify-items-center grid-cols-1 lg:grid-cols-4 gap-4">
      <div className="flex flex-col gap-4 items-center text-center">
        <img src={image} alt="" />
        <p className=" text-lg font-bold uppercase">TableWare</p>
      </div>{" "}
      <div className="flex flex-col gap-4 items-center text-center">
        <img src={image} alt="" />
        <p className=" text-lg font-bold uppercase">TableWare</p>
      </div>{" "}
      <div className="flex flex-col gap-4 items-center text-center">
        <img src={image} alt="" />
        <p className=" text-lg font-bold uppercase">TableWare</p>
      </div>{" "}
      <div className="flex flex-col gap-4 items-center text-center">
        <img src={image} alt="" />
        <p className=" text-lg font-bold uppercase">TableWare</p>
      </div>{" "}
    </div>
  );
};

export default Section1;
