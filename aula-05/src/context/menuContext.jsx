import { getApiCategories } from "src/services/categoriesService";

import { createContext, useState, useEffect, useContext } from "react";

export const MenuContext = createContext({
  items: [],
});

// eslint-disable-next-line react/prop-types
export const MenuContextPovider = ({ children }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      const items = await getApiCategories();
      setItems(items.data);
    };
    loadItems();
  }, []);
  return (
    <MenuContext.Provider value={{ items }}>{children}</MenuContext.Provider>
  );
};

export const useMenu = () => {
  const { items } = useContext(MenuContext);
  return items;
};
