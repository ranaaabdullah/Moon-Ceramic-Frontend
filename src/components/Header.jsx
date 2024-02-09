import React from "react";

import logo from "../assets/home/logo.png";
import search from "../assets/home/Search.png";
import avatar from "../assets/home/Avatar.png";
import heart from "../assets/home/Heart.png";
import cart from "../assets/home/cart.png";

import { Link } from "react-router-dom";

const Header = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Shop",
      href: "/shop",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  const icons = [
    {
      img: search,
      href: "/",
    },
    {
      img: avatar,
      href: "/",
    },
    {
      img: heart,
      href: "/",
    },
    {
      img: cart,
      href: "/cart",
    },
  ];
  return (
    <div className="container border-b-2 bg-white text-primary-100 px-3 py-5 flex flex-col lg:flex-row justify-center lg:justify-around items-center">
    <Link to={"/"}>
      <img src={logo} alt="" />
    </Link>
    
      <div className="flex  gap-8">
        {links.map((item) => {
          return <a href={item.href}>{item.name}</a>;
        })}
      </div>
      <div className="flex gap-4 ">
        {icons.map((item) => {
          return (
            <Link to={item.href}>
              <img src={item.img} alt=""></img>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
