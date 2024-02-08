import React from "react";

const InputSelect = ({ label, data }) => {
  return (
    <div>
      {/* {label && (
        <label className="block text-primary-100 capitalize text-sm font-bold mb-2">
          {label}
        </label>
      )}
      <select name={label} id="cars">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select> */}

      {label && (
        <label
          for="countries"
          class="block text-primary-100 capitalize text-sm font-bold mb-2"
        >
          {label}
        </label>
      )}
      <select
        id="countries"
        class="border-2 border-primary-100  w-full py-4 px-3 text-primary-100  leading-tight focus:outline-none focus:shadow-outline"
      >
        <option selected>{label}</option>
        {data.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};

export default InputSelect;
