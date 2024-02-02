import Image1 from "../../assets/sellers/image1.png";
import Image2 from "../../assets/sellers/image2.png";
import Image3 from "../../assets/sellers/image3.png";
import Image4 from "../../assets/sellers/image4.png";

const BestSellers = () => {
  const data = [
    {
      img: Image1,
      title: "Small Ecru Ceramic Compote",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      img: Image2,
      title: "Small Ecru Ceramic Compote",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      img: Image3,
      title: "Small Ecru Ceramic Compote",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      img: Image4,
      title: "Small Ecru Ceramic Compote",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      img: Image1,
      title: "Small Ecru Ceramic Compote",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      img: Image2,
      title: "Small Ecru Ceramic Compote",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      img: Image3,
      title: "Small Ecru Ceramic Compote",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
    {
      img: Image4,
      title: "Small Ecru Ceramic Compote",
      price: "$49.00",
      desc: "Lorem ipsum dolor sit amet conse bolli tetur adipiscing elit.",
    },
  ];
  return (
    <div className="flex flex-col mt-16  gap-6 items-center lg:my-8 justify-center">
      <h3 className="uppercase text-2xl font-semibold ">Best sellers</h3>
      <div className="grid grid-cols-1 items-end lg:grid-cols-4 gap-4">
        {data?.map((item, index) => {
          return (
            <div key={index} className="w-64">
              <img src={item?.img} alt="" />
              <h2 className="font-semibold text-sm uppercase">{item?.title}</h2>
              <h2 className="font-semibold text-sm uppercase">{item.price}</h2>
              <p className="text-primary-100  text-sm">{item?.desc}</p>
              <div className="flex items-center justify-center">
                <button className="uppercase p-2  mt-16 px-16 border-black border-2">
                  <h2 className="font-semibold text-sm">Add to card</h2>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BestSellers;
