import moment from "moment";
import { useCallback, useEffect, useMemo } from "react";
import cartConfig from "src/config/cart.config";

const DEFAULT_CART_LOCAL_DATA = {
  products: [],
  createdAt: moment(),
};

export const usePersistentCart = ({ setProducts, state }) => {
  const localProducts = useMemo(
    () =>
      JSON.parse(
        localStorage.getItem(cartConfig.key) ??
          JSON.stringify(DEFAULT_CART_LOCAL_DATA)
      ),
    []
  );

  const clearLocalProducts = useCallback(() => {
    localStorage.setItem(
      cartConfig.key,
      JSON.stringify(DEFAULT_CART_LOCAL_DATA)
    );
  }, []);

  const setLocalProducts = (product) => {
    const localProductsLoaded = [...localProducts.products, product];
    localStorage.setItem(
      cartConfig.key,
      JSON.stringify({
        ...localProducts,
        products: localProductsLoaded,
      })
    );
  };

  const addProductPersistent = (product) => {
    setLocalProducts(product);
  };

  useEffect(() => {
    const load = () => {
      try {
        const localData = localStorage.getItem(cartConfig.key);
        if (!localData) {
          const parsedLocalData = JSON.parse(localData);
          if (!parsedLocalData && !parsedLocalData?.products) {
            clearLocalProducts();
          }
        }
      } catch (error) {
        clearLocalProducts();
      }
    };
    load();
  }, [clearLocalProducts]);

  useEffect(() => {
    const loadFromLocalStorage = () => {
      if (state.isHydrated) return;
      const { createdAt, products } = localProducts ?? {};
      console.log("createdAt", createdAt, products);

      if (createdAt && products.length) {
        const date = moment(createdAt);

        date.set({
          minutes: cartConfig.expiration,
        });

        console.log("isAfter", moment().isAfter(date));
        if (!moment().isAfter(date)) {
          setProducts(products);
        } else {
          // clearLocalProducts();
        }
      }
    };

    loadFromLocalStorage();
  }, [localProducts, state.isHydrated, clearLocalProducts, setProducts]);

  return {
    addProductPersistent,
  };
};
