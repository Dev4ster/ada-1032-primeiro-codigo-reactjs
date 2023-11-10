/* eslint-disable react/prop-types */
import { createContext, useCallback, useContext, useReducer } from "react";
import { toast } from "react-toastify";
import { usePersistentCart } from "src/hooks/usePersistentCart";

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
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "BULK_ADD_PRODUCT":
      return {
        ...state,
        isHydrated: true,
        products: [...state.products, ...action.payload],
      };
    case "REMOVE_PRODUCT":
      return state;
    default:
      return state;
  }
};

export const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    isHydrated: false,
  });

  const bulkAddProducts = useCallback((products) => {
    dispatch({
      type: "BULK_ADD_PRODUCT",
      payload: products,
    });
  }, []);

  const { addProductPersistent } = usePersistentCart({
    state,
    setProducts: bulkAddProducts,
  });

  function addProductNotify(product) {
    toast.success(`Produto: ${product.product} adicionado no carrinho!`);
  }

  function addProduct(product) {
    addProductPersistent(product);
    addProductNotify(product);
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
        products: state.products,
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
