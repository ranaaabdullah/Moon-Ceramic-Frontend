import React from 'react'
import logo from "../assets/home/logo.png";
import search from "../assets/home/Search.png";
import avatar from "../assets/home/Avatar.png";
import heart from "../assets/home/Heart.png";
import cart from "../assets/home/cart.png";

const Header = () => {
  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Shop",
      href: "/",
    },
    {
      name: "About",
      href: "/",
    },
    {
      name: "Contact",
      href: "/",
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
      href: "/",
    },
  ];
  return (
    <div className="container bg-white text-primary-100 px-3 py-5  flex justify-around items-center">
      <img src={logo} alt="" />
      <div className="flex  gap-8">
        {links.map((item) => {
          return <a href={item.href}>{item.name}</a>;
        })}
      </div>
      <div className="flex gap-4 ">
        {icons.map((item) => {
          return (
            <a href={item.href}>
              <img src={item.img} alt=""></img>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Header