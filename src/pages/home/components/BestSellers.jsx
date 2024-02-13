import Button from "../../../components/Button";
import Card from "../../../components/Card";

const BestSellers = ({ title, data }) => {
  return (
    <div className="flex flex-col mt-16  lg:gap-6 items-center lg:my-8  justify-center">
      <h3 className="uppercase text-2xl font-semibold ">{title}</h3>
      <div className="grid grid-cols-2  lg:grid-cols-4 px-4 gap-4 lg:gap-14">
        {data?.map((item, index) => {
          return <Card key={index} item={item} index={index} />;
        })}
      </div>
    </div>
  );
};

export default BestSellers;
