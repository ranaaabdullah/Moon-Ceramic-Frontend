import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    quantity: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      console.log({ product });
      try {
        const exist = state.cart.find((item) => item.id === product.id);
        if (exist) {
          exist.quantity++;
          exist.totalPrice += product.totalPrice;
          state.quantity++;
          state.totalPrice += product.totalPrice;
        } else {
          state.cart.push({
            id: product.id,
            price: product.price,
            quantity: product.quantity,
            img: product.img,
            totalPrice: product.totalPrice,
            name: product.name,
            color: product.color,
          });
          state.quantity = state.quantity + product.quantity;
          state.totalPrice += product.totalPrice;
        }
      } catch (err) {
        return err;
      }
    },
    AddQuantityAndPrice(state, action) {
      const { quantity, price, id } = action.payload;
      console.log(action.payload);
      const updatedData = state.cart.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            quantity: item?.quantity + 1,
            totalPrice: item?.totalPrice + price,
          };
        }
        return item;
      });
      state.cart = updatedData;
      state.totalPrice += price;
    },
    lessQuantityAndPrice(state, action) {
      const { quantity, price, id } = action.payload;
      console.log(action.payload);
      const updatedData = state.cart.map((item) => {
        if (item.id == id) {
          return {
            ...item,
            quantity: item?.quantity - 1,
            totalPrice: item?.totalPrice - price,
          };
        }
        return item;
      });
      state.cart = updatedData;
      state.totalPrice -= price;
    },
    removeFromCart(state, action) {
      const { id, totalPrice } = action.payload;

      state.cart = state.cart.filter((product) => product.id !== id);
      state.totalPrice -= totalPrice;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  AddQuantityAndPrice,
  lessQuantityAndPrice,
} = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
