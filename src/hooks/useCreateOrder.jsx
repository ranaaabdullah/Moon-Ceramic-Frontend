import { useMutation } from "@tanstack/react-query";
import React from "react";
import network from "../config/network";
import URL from "../config/url";

const useCreateOrder = () => {
  const CreateOrder = async (payload) => {
    const response = await network.get(URL.createOrder, payload);
    return response;
  };

  const { mutation } = useMutation(
    
  );

  return <div></div>;
};

export default useCreateOrder;
