const URL = {
  getAllProducts: (page) => `/product/?page=${page}&limit=10`,
  getSingleProduct: (id) => `/product/${id}`,
  Login: "/login",
  Register: "/register",
  createOrder: "/order",
};

export default URL;
