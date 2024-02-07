import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import image11 from "../../assets/NewArrival/image1.png";
import Button from "../../components/Button";

const TableCart = () => {
  return (
    <div>
      <div className="relative overflow-x-auto shadow-lg ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-white uppercase bg-primary-100">
            <tr>
              <th scope="col" className="px-6 w-1 py-3">
                <MdOutlineDelete size={25} />
              </th>
              <th scope="col" className="px-16 py-3">
                Photo
              </th>
              <th scope="col" className="px-16  py-3">
                Product
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="text-center lg:pe-12 py-3">
                Qty
              </th>
              <th scope="col" className="px-6 py-3">
                Subtotal
              </th>{" "}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white border-b border-black">
              <td className="px-6 py-4 ">
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  <RxCross2 size={25} />
                </a>
              </td>
              <td className="p-3">
                <img
                  src={image11}
                  className="w-16 md:w-32 max-w-full max-h- full"
                  alt="Apple Watch"
                />
              </td>
              <td className="px-6 py-4 text-lg font-semibold text-primary-100">
                Porcelain Dinner Plate (27cm)
              </td>
              <td className="px-6 py-4 font-semibold text-lg text-primary-100">
                $599
              </td>
              <td className="px-6 py-4  ">
                <div className="flex items-center justify-center  w-32 gap-2 border-2 border-primary-100">
                  <Button>-</Button>
                  <p>1</p>
                  <Button>+</Button>
                </div>
              </td>{" "}
              <td className="px-6 py-4 font-semibold text-lg text-brown-200">
                $599
              </td>
            </tr>
            <tr className="bg-white border-b border-black">
              <td className="px-6 py-4 ">
                <a
                  href="#"
                  className="font-medium text-red-600 dark:text-red-500 hover:underline"
                >
                  <RxCross2 size={25} />
                </a>
              </td>
              <td className="p-3">
                <img
                  src={image11}
                  className="w-16 md:w-32 max-w-full max-h- full"
                  alt="Apple Watch"
                />
              </td>
              <td className="px-6 py-4 text-lg font-semibold text-primary-100">
                Porcelain Dinner Plate (27cm)
              </td>
              <td className="px-6 py-4 font-semibold text-lg text-primary-100">
                $599
              </td>
              <td className="px-6   py-4">
                <div className="flex items-center gap-2  border-2 border-primary-100">
                  <Button>-</Button>
                  <p>1</p>
                  <Button>+</Button>
                </div>
              </td>{" "}
              <td className="px-6 py-4 font-semibold text-lg text-brown-200">
                $599
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableCart;
