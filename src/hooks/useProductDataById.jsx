import { useQuery } from "@tanstack/react-query";
import React from "react";
import network from "../config/network";
import URL from "../config/url";

const useProductDataById = (productId) => {
  const fetchSingleProduct = async ({ queryKey }) => {
    const Id = queryKey[1];
    const response = await network.get(URL.getSingleProduct(Id));
    return response;
  };

  const { isPending, error, data } = useQuery({
    queryKey: ["Product", productId],
    queryFn: fetchSingleProduct,
  });
  if (isPending) return <div>...Loading</div>;

  if (error) return "An error has occurred: " + error.message;

  return { data: data?.data, isPending, error };
};

export default useProductDataById;
