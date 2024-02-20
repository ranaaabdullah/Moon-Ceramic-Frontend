const URL = {
  getAllProducts: (page) => `/product/?page=${page}&limit=6`,
  getSingleProduct: (id) => `/product/${id}`,
  Login: "auth/login",
  Register: "auth/register",
  createOrder: "/product",
};

export default URL;
