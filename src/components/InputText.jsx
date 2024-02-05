import React from 'react'

const InputText = ({data}) => {
  return (
    <div>
      <div>
        <label
          className="block text-primary-100 text-sm font-bold mb-2"
          htmlFor={data.key}
        >
          {data.label}
        </label>
        <input
          className=" border-2 border-primary-100  w-full py-4 px-3 text-primary-100 leading-tight focus:outline-none focus:shadow-outline"
          id={data.key}
          type="text"
          placeholder={data.placeHodler}
        />
      </div>
    </div>
  );
}

export default InputText