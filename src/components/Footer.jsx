import logo from "../assets/logo2.png";
import { FaArrowRight } from "react-icons/fa";
import React from "react";
import Button from "./Button";

const Footer = () => {
  return (
    <>
      <div className="flex-col items-center justify-center  bg-secondary-100">
        <div className="flex justify-center text-white py-5 ">
          <div className=" border-b border-white">
            <div className="flex flex-col gap-5 items-start py-8 px-20">
              <img className="text-white" src={logo} alt="" />
              <p className="text-primary-400m lg:w-80">
                Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam
                mauris sed ma
              </p>
              <div className="">
                <Button
                  text={"white"}
                  className={"flex gap-1 px-16"}
                  border={true}
                >
                  Get started
                  <FaArrowRight />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-b border-s border-white">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              <div className="p-8">
                <h2 className="font-semibold text-lg uppercase">About us</h2>
                <div className="flex-col  mt-5">
                  <p className=" text-primary-200  text-sm font-light py-2">
                    Mission
                  </p>
                  <p className=" text-primary-200  text-sm font-light py-2">
                    Our team
                  </p>
                  <p className=" text-primary-200  text-sm font-light py-2">
                    Awards
                  </p>
                  <p className=" text-primary-200  text-sm font-light py-2">
                    Testimonials
                  </p>
                  <p className=" text-primary-200  text-sm font-light py-2">
                    Privacy policy
                  </p>
                </div>
              </div>
              <div className="p-8">
                <h2 className="font-semibold text-lg uppercase">Services</h2>
                <div className="flex-col  mt-5">
                  <p className=" text-primary-200  text-sm font-light py-2">
                    Web design
                  </p>
                  <p className=" text-primary-200  text-sm font-light py-2">
                    Web development
                  </p>
                  <p className=" text-primary-200  text-sm font-light py-2">
                    Mobile design
                  </p>
                  <p className=" text-primary-200  text-sm font-light py-2">
                    UI/UX design
                  </p>
                  <p className=" text-primary-200  text-sm font-light py-2">
                    Branding design
                  </p>
                </div>
              </div>
              <div className="p-8">
                <h2 className="font-semibold text-lg uppercase">Portfolio</h2>
                <div className="flex-col  mt-5">
                  <p className=" text-primary-200  text-sm font-light py-2">
                    Corporate websites
                  </p>
                  <p className=" text-primary-200  text-sm font-light py-2">
                    E-commerce
                  </p>
                  <p className=" text-primary-200  text-sm font-light py-2">
                    Mobile apps
                  </p>
                  <p className=" text-primary-200  text-sm font-light py-2">
                    Landing pages
                  </p>
                  <p className=" text-primary-200  text-sm font-light py-2">
                    UI/UX projects
                  </p>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
        <div className="flex text-secondary-200 items-center justify-center p-2">
          <h2>
            Copyright © 2023 Moon| All Rights Reserved | Terms and Conditions |
            Privacy Policy
          </h2>
        </div>
      </div>
    </>
  );
};

export default Footer;
