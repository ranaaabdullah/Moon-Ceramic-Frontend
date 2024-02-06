import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchInput = ({ placeholder }) => {
  return (
    <div className="relative">
      <div className="absolute top-3 left-1 ">
        <CiSearch color="grey" size={25} />
      </div>
      <input
        className="p-3 ps-8 border border-primary-100"
        type="text"
        placeholder={placeholder}
      ></input>
    </div>
  );
};

export default SearchInput;
