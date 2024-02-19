import { useQuery } from "@tanstack/react-query";
import React from "react";
import network from "../config/network";
import URL from "../config/url";

const useProductData = ( page ) => {
  const { isPending, error, data } = useQuery({
    queryKey: ["Products", page],
    queryFn: () => fetchProductList(),
  });

  const fetchProductList = async () => {
    const response = await network.get(URL.getAllProducts(page));
    return response;
  };

  if (isPending) return <div>...Loading</div>;

  if (error) return "An error has occurred: " + error.message;

  return { data: data?.data?.data, isPending, error };
};

export default useProductData;
