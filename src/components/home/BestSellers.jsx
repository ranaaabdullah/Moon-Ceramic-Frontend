import Button from "../Button";
import Card from "../Card";

const BestSellers = ({ title, data }) => {
  return (
    <div className="flex flex-col mt-16  gap-6 items-center lg:my-8  justify-center">
      <h3 className="uppercase text-2xl font-semibold ">{title}</h3>
      <div className="grid grid-cols-2  lg:grid-cols-4 gap-7">
        {data?.map((item, index) => {
          return <Card item={item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default BestSellers;
