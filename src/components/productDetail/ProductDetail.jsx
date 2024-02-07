import React from "react";
import Button from "../../components/Button";
import { CiHeart } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import logo1 from "../../assets/ProductDetail/Facebook.png";
import logo2 from "../../assets/ProductDetail/Twitter.png";
import logo3 from "../../assets/ProductDetail/Instagram.png";
import logo4 from "../../assets/ProductDetail/Linkedin.png";
const ProductDetail = () => {
  
  return (
    <div>
      <div className="p-2 px-10 flex flex-col gap-4 ">
        <h2 className="text-primary-100 tracking-widest font-bold uppercase text-xl">
          Marin White Dinner Plate
        </h2>
        <div className="flex items-center gap-5 ">
          <p>(1256 Reviews)</p>
          <p className="">
            Stock: <span className="text-brown-200"> In stock</span>
          </p>
        </div>
        <div className="text-2xl flex items-center gap-2">
          <p>$35</p>
          <span className="text-secondary-200"> $50</span>
        </div>
        <div>
          <h2>Color : Blue</h2>
          <div>
            {" "}
            <div className="flex  gap-3">
              <div className="w-4 h-4  bg-white border-primary-100 border " />
              <div className="w-4 h-4  bg-brown-200 " />
              <div className="w-4 h-4  bg-[#CCD8CE] " />
              <div className="w-4 h-4  bg-[#B4555D]  " />
              <div className="w-4 h-4  bg-[#9B92A1]  " />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 border-2 border-primary-100">
            <Button>-</Button>
            <p>1</p>
            <Button>+</Button>
          </div>
          <div>
            <Button
              className={
                "flex gap-1 justify-center !px-28    bg-primary-100 text-white  text-center"
              }
            >
              Add to cart
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button className={"!px-40"} border={true}>
            Buy now
          </Button>
          <Button border={true} className={"!py-2"}>
            <CiHeart size={21} />
          </Button>
        </div>
        <div className="flex flex-col py-4 gap-2">
          <p className="font-semibold ">Share this:</p>
          <div className="flex items-center  gap-4">
            <img src={logo1} alt="" />
            <img src={logo2} alt="" />
            <img src={logo3} alt="" />
            <img src={logo4} alt="" />
          </div>
        </div>

        <div>
          <div id="accordion-collapse" data-accordion="collapse">
            <h2 id="accordion-collapse-heading-1">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5  text-gray-500 border-y border-secondary-200    gap-3"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
              >
                <span className="font-semibold text-lg  text-primary-100">
                  Details
                </span>
                <FaPlus />
              </button>
            </h2>
            <div
              id="accordion-collapse-body-1"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-1"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is an open-source library of interactive components
                  built on top of Tailwind CSS including buttons, dropdowns,
                  modals, navbars, and more.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out this guide to learn how to{"{"}" "{"}"}
                  <a
                    href="/docs/getting-started/introduction/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    get started
                  </a>
                  {"{"}" "{"}"}
                  and start developing websites even faster with components on
                  top of Tailwind CSS.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-2">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5  text-gray-500 border-b border-secondary-200    gap-3"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
              >
                <span className="font-semibold text-lg  text-primary-100">
                  Dimensions
                </span>
                <FaPlus />
              </button>
            </h2>
            <div
              id="accordion-collapse-body-2"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-2"
            >
              <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Flowbite is first conceptualized and designed using the Figma
                  software so everything you see in the library has a design
                  equivalent in our Figma file.
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Check out the{"{"}" "{"}"}
                  <a
                    href="https://flowbite.com/figma/"
                    className="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Figma design system
                  </a>
                  {"{"}" "{"}"}
                  based on the utility classes from Tailwind CSS and components
                  from Flowbite.
                </p>
              </div>
            </div>
            <h2 id="accordion-collapse-heading-3">
              <button
                type="button"
                className="flex items-center justify-between w-full p-5  text-gray-500 border-b border-secondary-200   gap-3"
                data-accordion-target="#accordion-collapse-body-1"
                aria-expanded="true"
                aria-controls="accordion-collapse-body-1"
              >
                <span className="font-semibold text-lg  text-primary-100">
                  Reviews
                </span>
                <FaPlus />
              </button>
            </h2>
            <div
              id="accordion-collapse-body-3"
              className="hidden"
              aria-labelledby="accordion-collapse-heading-3"
            >
              <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  The main difference is that the core components from Flowbite
                  are open source under the MIT license, whereas Tailwind UI is
                  a paid product. Another difference is that Flowbite relies on
                  smaller and standalone components, whereas Tailwind UI offers
                  sections of pages.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both Flowbite, Flowbite
                  Pro, and even Tailwind UI as there is no technical reason
                  stopping you from using the best of two worlds.
                </p>
                <p className="mb-2 text-gray-500 dark:text-gray-400">
                  Learn more about these technologies:
                </p>
                <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                  <li>
                    <a
                      href="https://flowbite.com/pro/"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Flowbite Pro
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/"
                      rel="nofollow"
                      className="text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Tailwind UI
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
