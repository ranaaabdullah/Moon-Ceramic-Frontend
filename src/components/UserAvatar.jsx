import React, { useState } from "react";
import avatar from "../assets/home/Avatar.png";

import { useDispatch, useSelector } from "react-redux";
import { LogoutUser } from "../redux/slices/AuthSlice";
import { useNavigate } from "react-router-dom";

const UserAvatar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state?.auth?.user?.user);
  return (
    <div>
      <div>
        <img
          onClick={() => {
            if (user) setIsOpen(!isOpen);
            else {
              navigate("login");
            }
          }}
          id="avatarButton"
          type="button"
          data-dropdown-toggle="userDropdown"
          data-dropdown-placement="bottom-start"
          className="w-8 h-8 rounded-full cursor-pointer"
          src={
            user
              ? "https://avatars.mds.yandex.net/i?id=10a790b78034daa5a48dffb837e0ea63aa1182be-9293412-images-thumbs&n=13"
              : avatar
          }
          alt="User dropdown"
        />
        <div
          id="userDropdown"
          className={`z-10 ${
            isOpen && user ? "block" : "hidden"
          } bg-white divide-y divide-gray-100 absolute  border border-primary-100  text-primary-100  rounded-lg shadow w-44 `}
        >
          <div className="px-4 py-3 cursor-pointer   text-sm ">
            <div>{user?.name}</div>
            <div className="font-medium truncate">{user?.email}</div>
          </div>

          <div className="py-1">
            <div
              onClick={() => {
                user ? dispatch(LogoutUser()) : navigate("/login");
              }}
              className="block px-4 py-2 text-sm  border-t border-primary-100 cursor-pointer text-primary-100"
            >
              {user ? "Sign Out" : "Login"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAvatar;
