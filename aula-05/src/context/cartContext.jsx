/* eslint-disable react/prop-types */
import { createContext, useContext, useReducer } from "react";

export const CartContext = createContext({
  products: [],
  addProduct() {},
  removeProduct() {},
  finish() {},
  totalAmount: 0,
});

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return [...state, action.payload];
    case "REMOVE_PRODUCT":
      return state;
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, []);

  function addProduct(product) {
    dispatch({
      type: "ADD_PRODUCT",
      payload: product,
    });
  }
  function removeProduct() {}
  function finish() {}

  return (
    <CartContext.Provider
      value={{
        products: state,
        addProduct,
        removeProduct,
        finish,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cart = useContext(CartContext);
  return cart;
};
