import { createContext, useContext, useReducer } from "react";

const CART_INITIAL_VALUE = {
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
  total: 0,
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter((product) => product.id !== action.payload);
    default:
      return state;
  }
};

export const CartContext = createContext({
  ...CART_INITIAL_VALUE,
});

// eslint-disable-next-line react/prop-types
export const CartContextProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, []);

  const total = cartState.reduce((prev, next) => prev + next.price, 0);

  const addProduct = (product) => {
    dispatch({
      type: "ADD",
      payload: product,
    });
  };

  const removeProduct = (productId) => {
    dispatch({
      type: "DELETE",
      payload: productId,
    });
  };

  return (
    <CartContext.Provider
      value={{
        addProduct,
        removeProduct,
        total,
        products: cartState,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const cartData = useContext(CartContext);

  return cartData;
};
